import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentIntoDB(studentData);
    // Note: Will call service function to send this data.
    // Note: ei controller file just application logic handle korbe.
    // NOte: sob business logic ebong MongoDB query service file e thakbe.

    res.status(200).json({
      success: true,
      message: 'Students is created succesfully',
      data: result,
    }); //Note: Sending Response
  } catch (error) {
    console.log(error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAppStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All students are retreieved succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    // Request Code:
    const studentId = req.params.studentId;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    // Response Code:
    res.status(200).json({
      success: true,
      message: 'A single student is retreieved succesfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
