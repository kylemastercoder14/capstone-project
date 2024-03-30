"use client";

import Heading from "@/components/main/heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddProgram = () => {
  const router = useRouter();

  const [programName, setProgramName] = useState("");
  const [programCode, setProgramCode] = useState("");

  const [loading, setLoading] = useState(false);

  const generateProgramCode = (name) => {
    const excludedWords = ["of", "and", "the", "in", "on"];
    const words = name.split(" ");
    const code = words
      .filter((word) => {
        const lowerWord = word.toLowerCase();
        return !excludedWords.includes(lowerWord) || lowerWord !== word;
      })
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
    return code;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        programName,
        programCode: generateProgramCode(programName),
      };
      const response = await axios.post(`/api/programs`, data);
  
      if (response.status === 201) {
        router.push(`/pages/programs`);
        toast.success("Program added");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Program name already exists
        toast.error("Program name already exists.");
      } else {
        console.error(error);
        toast.error("Failed to add program. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };  

  return (
    <>
      <div className="py-5 flex flex-col">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <Heading title="Create Program" />
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="w-full space-y-6">
              <div className="flex flex-col items-start space-y-2">
                <p className="text-xs text-muted-foreground uppercase font-bold">
                  Program Name
                </p>
                <input
                  disabled={loading}
                  onChange={(e) => setProgramName(e.target.value)}
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
                  disabled={loading}
                  value={generateProgramCode(programName)}
                  className="w-full py-2 px-3 border rounded-md"
                  type="text"
                  placeholder="IICS"
                  readOnly
                />
              </div>
              <button
                disabled={loading}
                className="bg-green-800 hover:bg-green-800/90 text-white rounded-md px-5 py-2"
              >
                Create
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AddProgram;
