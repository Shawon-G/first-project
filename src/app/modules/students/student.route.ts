import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);
// Note: This code will call controller function.

router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);
export const StudentRoutes = router;
// Note: Router nijei ekta object. Tai object syntex e export korbo na.
