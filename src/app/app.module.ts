import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentService } from 'src/student/student.service';
import { StudentTeacherController } from 'src/teachers/student.controller';
import { TeacherService } from 'src/teachers/teacher.service';
import { TeacherController } from 'src/teachers/teachers.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, StudentTeacherController],
  providers: [StudentService, TeacherService],
})
export class AppModule {}
