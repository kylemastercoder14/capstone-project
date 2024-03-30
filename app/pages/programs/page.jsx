"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatDateTime } from "@/helpers/formatDateTime";
import { ProgramClient } from "./components/client";


const Programs = () => {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get("/api/programs");
        setPrograms(response.data.programs);
      } catch (error) {
        console.error("Error loading programs: ", error);
      }
    };

    fetchPrograms();
  }, []);

  const formattedProgram = programs.map((item) => ({
    _id: item._id,
    name: item.name,
    programCode: item.programCode,
    createdAt: formatDateTime(item.createdAt),
  }));

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 pt-6">
        <ProgramClient data={formattedProgram} />
      </div>
    </div>
  );
};

export default Programs;
