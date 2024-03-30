import mongoose, { Schema } from "mongoose";

const programSchema = new Schema(
  {
    name: {type: String, required: true},
    programCode: {type: String, required: true},
  },
  {
    timestamps: true,
  }
);

const ProgramModel = mongoose.models.Program || mongoose.model("Program", programSchema);

export default ProgramModel;