import { Controller, Get, Put, Param } from '@nestjs/common';
import {
  FindStudentsResponseDto,
  StudentsResponseDto,
} from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(
    @Param('teacherId') teacherId: string,
  ): FindStudentsResponseDto[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentsResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
