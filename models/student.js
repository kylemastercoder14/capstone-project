import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    studentNumber: {type: String, required: true},
    firstName: {type: String, required: true},
    middleName: {type: String, required: false},
    lastName: {type: String, required: true},
    suffix: {type: String, required: false},
    birthdate: {type: String, required: true},
    age: {type: String, required: true},
    sex: {type: String, required: true},
    contactNumber: {type: String, required: true},
    civilStatus: {type: String, required: true},
    houseUnit: {type: String, required: true},
    barangay: {type: String, required: true},
    zipCode: {type: String, required: true},
    city: {type: String, required: true},
    province: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    yearLevel: {type: String, required: true},
    program: {type: String, required: true},
    section: {type: String, required: true},
    elementary: {type: String, required: true},
    highschool: {type: String, required: true},
  },
  {
    timestamps: true,
  }
);

const StudentModel = mongoose.models.Student || mongoose.model("Student", studentSchema);

export default StudentModel;