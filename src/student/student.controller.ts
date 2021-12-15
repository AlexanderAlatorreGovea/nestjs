import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentsResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentsResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentsResponseDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentsResponseDto[] {
    return this.studentService.createStudent(body);
  }

  @Put()
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentsResponseDto {
    return this.studentService.updateStudent(body, studentId);
  }
}
