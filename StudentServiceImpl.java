package student.management.serviceImplement;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import student.management.entities.Student;
import student.management.repository.StudentReposit;
import student.management.studentService.StudentService;

@Component
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentReposit reposit;

	// // Add New Student
	public Student addNewStudent(Student student) {
		try {

			Student saveStudent = this.reposit.save(student);
			if (saveStudent != null) {
				return saveStudent;
			} else {
				throw new Exception("Add new Exception student is null");

			}

		} catch (Exception e) {
			System.out.println(e + "--" + e.getMessage());
			return null;
		}

	}

	// Get All Student
	public List<Student> getAllStudents() {
		List<Student> listOfStudents = this.reposit.findAll();
		try {
			if (!listOfStudents.isEmpty()) {
				return listOfStudents;
			} else {
				int listSize = listOfStudents.size();
				System.out.println("Student is empty : " + listSize);
			}

		} catch (Exception e) {
			System.out.println(e + "--" + e.getMessage());

		}
		return getAllStudents();
	}

	// Delete Student
	public void deleteStudentById(Long id) {

		try {
			Optional<Student> opS = reposit.findById(id);
			if (opS.isPresent()) {
				this.reposit.deleteById(id);
			} else {
				throw new Exception("Delete student exception(s not present)");
			}

		} catch (Exception e) {
			System.out.println(e + " -- " + e.getMessage());

		}

	}

	// get details of student
	public Student getStudentDetailsById(Long sId) {
		try {
			Optional<Student> findById = this.reposit.findById(sId);
			if (findById.isPresent()) {

				Student student = findById.get();
				return student;
			} else {
				System.out.println("Student not availbel with id:" + sId);
			}

		} catch (Exception e) {

			e.printStackTrace();
			System.out.println("Student Details Exception!!" + e.getMessage());

		}
		return null;

	}

	// Update Student
	public Student updateStudent(Long id, Student student) {
		try {
			Optional<Student> findById = this.reposit.findById(id);
			if (findById.isPresent()) {
				student = findById.get();
				return this.reposit.save(student);
			} else {

				throw new Exception("Student update failed!! bcs student is null");

			}

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
			return null;
		}

	}

	// Implement search logic based on student name
	public List<Student> searchStudentsByName(String name) {
		List<Student> findBySNameContainingIgnoreCase = this.reposit.searchStudentsByNamePhoneAddress(name);
		return findBySNameContainingIgnoreCase;
	}

}
