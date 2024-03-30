import { connectMongoDB } from "@/lib/db";
import ProgramModel from "@/models/program";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const programs = await ProgramModel.find();
  return NextResponse.json({ programs });
}
  
export async function POST(request) {
  const { programName, programCode } = await request.json();
  await connectMongoDB();

  // Check if program with the same name already exists
  const existingProgram = await ProgramModel.findOne({ name: programName });
  if (existingProgram) {
    return NextResponse.json({ message: "Program with the same name already exists" }, { status: 400 });
  }
  
  await ProgramModel.create({ name: programName, programCode });
  return NextResponse.json({ message: "Program created!" }, { status: 201 });
}