import { Injectable } from '@nestjs/common';
import { students } from '../db';
import { v4 as uuid } from 'uuid';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentsResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): FindStudentsResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentsResponseDto {
    return this.students.find((student) => student.id === studentId);
  }

  createStudent(payload: CreateStudentDto): StudentsResponseDto[] {
    const newStudent = {
      id: uuid(),
      ...payload,
    };

    return [...this.students, newStudent];
  }

  updateStudent(payload: UpdateStudentDto, id: string) {
    let updatedStudent: StudentsResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === id) {
        updatedStudent = {
          id,
          ...payload,
        };
        return updatedStudent;
      } else return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }

  getStudentsByTeacherId(teacherId: string): FindStudentsResponseDto[] {
    return this.students.filter((student) => student.teacher === teacherId);
  }

  updateStudentTeacher(
    teacherId: string,
    studentId: string,
  ): StudentsResponseDto {
    let updatedStudent: StudentsResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
        return updatedStudent;
      } else return student;
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }
}
