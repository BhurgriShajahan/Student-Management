package student.management.studentService;

import java.util.List;

import org.springframework.stereotype.Service;

import student.management.entities.Student;

@Service
public interface StudentService {

    // Add new student
    public abstract Student addNewStudent(Student student);

    // get all students
    public abstract List<Student> getAllStudents();

    // Delete Student
    public abstract void deleteStudentById(Long id);

    // get details of student by id
    public abstract Student getStudentDetailsById(Long sId);

    // Update Student
    public abstract Student updateStudent(Long id, Student student);

    // Search student
    public abstract List<Student> searchStudentsByName(String name);

}
