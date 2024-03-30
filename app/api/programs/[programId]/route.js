import { connectMongoDB } from "@/lib/db";
import ProgramModel from "@/models/program";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
    const { programId } = params;
    const { newProgramName, newProgramCode } = await request.json();
    await connectMongoDB();
    await ProgramModel.findByIdAndUpdate(programId, { name: newProgramName, programCode: newProgramCode });
    return NextResponse.json({ message: "Program updated" }, { status: 200 });
}

export async function GET(request, { params }) {
    const { programId } = params;
    await connectMongoDB();
    const program = await ProgramModel.findOne({ _id: programId });
    return NextResponse.json({ program }, { status: 200 });
}

export async function DELETE(request, { params }) {
    const { programId } = params;
    await connectMongoDB();
    await ProgramModel.findByIdAndDelete({_id: programId});
    return NextResponse.json({ message: "Program deleted" }, { status: 200 });
}