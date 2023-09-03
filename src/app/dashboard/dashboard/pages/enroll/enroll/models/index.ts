import { Courses } from "../../../courses/courses/models";
import { Student } from "../../../students/students/models";

export interface Inscription{
    id:number,
    courseId:number,
    studentId:number
}

export interface InscriptionStudentCourse   extends Inscription{
    course: Courses,
    student:Student,
}