"use client";

import Heading from "@/components/main/heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { AlertModal } from "@/components/modals/alert-modal";
import { Trash } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ProgramForm = ({name, programCode, programId}) => {
  const router = useRouter();

  const [newProgramName, setNewProgramName] = useState(name);
  const [newProgramCode, setNewProgramCode] = useState(programCode);

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.patch(`/api/programs/${programId}`, data);

      if(!response) {
        toast.error("Something went wrong.");
      }

      router.push(`/pages/programs`);
      toast.success("Program updated");
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/programs/${programId}`);
      router.push(`/pages/programs`);
      toast.success("Program deleted.");
    } catch (error) {
      console.error("Error deleting program:", error);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="py-5 flex flex-col">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Heading title="Edit Program" />
              {programId && (
                <Button
                  disabled={loading}
                  variant="destructive"
                  size="sm"
                  onClick={() => setOpen(true)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="w-full space-y-6">
              <div className="flex flex-col items-start space-y-2">
                <p className="text-xs text-muted-foreground uppercase font-bold">
                  Program Name
                </p>
                <input
                  onChange={(e) => setNewProgramName(e.target.value)}
                  value={newProgramName}
                  className="w-full py-2 px-3 border rounded-md"
                  type="text"
                  placeholder="Institute of Information and Computing Sciences"
                />
              </div>
              <div className="flex flex-col items-start space-y-2">
                <p className="text-xs text-muted-foreground uppercase font-bold">
                  Program Code
                </p>
                <input
                  onChange={(e) => setNewProgramCode(e.target.value)}
                  value={newProgramCode}
                  className="w-full py-2 px-3 border rounded-md"
                  type="text"
                  placeholder="IICS"
                  readOnly
                />
              </div>
              <button className="bg-green-800 hover:bg-green-800/90 text-white rounded-md px-5 py-2">
                Save Changes
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProgramForm;
