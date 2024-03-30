import axios from "axios";
import React from "react";
import ProgramForm from "./components/program-form";

const getProgramById = async (programId) => {
  try {
    const res = await fetch(`http://localhost:3000/api/programs/${programId}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch program");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditProgram = async ({ params }) => {
  const { programId } = params;
  const { program } = await getProgramById(programId);
  const { name, programCode } = program;

  return <ProgramForm programId={programId} name={name} programCode={programCode} />;
};

export default EditProgram;
