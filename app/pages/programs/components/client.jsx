"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";

import { columns } from "./columns";
import Heading from "@/components/main/heading";

export const ProgramClient = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Programs (${data.length})`} />
        <Button onClick={() => router.push(`/pages/programs/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add Program
        </Button>
      </div>
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};
