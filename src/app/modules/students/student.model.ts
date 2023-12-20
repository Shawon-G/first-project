//  Note: ei file e Schema ebong Model ache....

import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

// Schema:------------------------------------------
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name Lagbei Lagbe'],
  }, // Note: custom validation with self own error message.
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last Name Lagbei Lagbe'] },
  // Note: custom validation with self own error message.
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    type: userNameSchema,
    required: true,
  }, // Note: User Name Schema keo built in diye Validate kore dilam.
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: 'The Gender Field Can Only Be One of the Following',
    },
    required: true,
  }, // Note: eta ke enam type bole mongoDB te with Custom validation.
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  }, // Enam type with built in validation
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {
    type: guardianSchema,
    required: true,
  }, // Note: guardian Schema keo built in diye Validate kore dilam.
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  }, // Note: local guardian Schema keo built in diye Validate kore dilam. Sathe Customise o korlam error messege ke.
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  }, // Enam type with built in validation
});

// NOTE:  Validation gulo requered ase emn object ei use korechi...

// Modeling:--------------------------------------------------------
const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel;

// Note: Ekhon ei <Student> er upor mongoDB r query chalabo.
