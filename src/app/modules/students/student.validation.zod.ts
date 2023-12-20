import { z } from 'zod';

// Define Zod schemas for nested structures
const userNameValidationSchema = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1).max(255),
  fatherOccupation: z.string().min(1).max(255),
  fatherContactNo: z.string().min(1).max(20), // Adjust the max length as needed
  motherName: z.string().min(1).max(255),
  motherOccupation: z.string().min(1).max(255),
  motherContactNo: z.string().min(1).max(20), // Adjust the max length as needed
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1).max(255),
  occupation: z.string().min(1).max(255),
  contactNo: z.string().min(1).max(20), // Adjust the max length as needed
  address: z.string().min(1).max(500), // Adjust the max length as needed
});

// Define the main Zod schema for the student
const studentValidationSchema = z.object({
  id: z.string(),
  name: userNameValidationSchema,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string().min(1).max(20), // Adjust the max length as needed
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1).max(500), // Adjust the max length as needed
  permanentAddress: z.string().min(1).max(500), // Adjust the max length as needed
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).optional(),
});

export default studentValidationSchema;
