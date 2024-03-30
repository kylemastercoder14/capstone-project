"use client";

import CardProvider from "@/components/providers/card-provider";
import Analytics from "@/components/main/analytics";
import FacultySubmitted from "@/components/main/faculty-submitted";
import {
  GraduationCap,
  LibraryBig,
  NotepadText,
  SquareKanban,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="py-5 flex flex-col">
      {/* CARDS */}
      <div className="grid md:grid-cols-4 w-full grid-cols-1 gap-x-5 gap-y-5">
        <CardProvider
          title="Total Programs"
          value={7}
          percentage="15%"
          icon={<SquareKanban />}
        />
        <CardProvider
          title="Total Faculties"
          value={185}
          percentage="30%"
          icon={<LibraryBig />}
        />
        <CardProvider
          title="Total Subjects"
          value={189}
          percentage="10%"
          icon={<NotepadText />}
        />
        <CardProvider
          title="Total Students"
          value={4000}
          percentage="40%"
          icon={<GraduationCap />}
        />
      </div>
      <div className="flex mt-5 md:flex-row flex-col gap-5">
        <FacultySubmitted />
        <Analytics />
      </div>
    </div>
  );
};

export default Dashboard;
