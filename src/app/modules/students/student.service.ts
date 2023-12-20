import { Student } from './student.interface';
import StudentModel from './student.model';

const createStudentIntoDB = async (studentData: Student) => {
  // const result = await StudentModel.create(student);
  // // Note: Using built in static method

  const student = new StudentModel(studentData);
  const result = await student.save();
  // Note: Using built in instance method
  return result;
};

const getAppStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAppStudentsFromDB,
  getSingleStudentFromDB,
};
