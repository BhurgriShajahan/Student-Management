package student.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import student.management.entities.Student;
import student.management.serviceImplement.StudentServiceImpl;

// @CrossOrigin("*")
@RestController
@RequestMapping("/student")
public class StudentControle {

	@Autowired
	StudentServiceImpl service;

	// Add New Student
	@PostMapping("/addNewStudent")
	public ResponseEntity<Student> addNewStudent(@RequestBody Student student) {
		Student newStudent = service.addNewStudent(student);

		System.out.println("New Student Created Success-------");

		return ResponseEntity.ok(newStudent);
	}

	// Get All Student
	@GetMapping("/getAllStudents")
	public ResponseEntity<List<Student>> getAllStudents() {
		List<Student> allStudents = service.getAllStudents();
		System.out.println("Show All Students success-------");
		return ResponseEntity.ok(allStudents);

	}

	// Delete Student
	@DeleteMapping("/deleteStudentById/{sId}")
	public void deleteStudentById(@PathVariable("sId") Long id) {
		System.out.println("Student Delete success...");
		service.deleteStudentById(id);
	}

	// GetStudentDetails
	@GetMapping("/getStudentById/{sId}")
	public ResponseEntity<Student> getStudentDetailsById(@PathVariable("sId") Long id) {
		Student studentDetails = this.service.getStudentDetailsById(id);

		return ResponseEntity.ok(studentDetails);
	}

	// Update Student API
	@PutMapping("/updateStudent/{sId}")
	public ResponseEntity<Student> updateStudentById(@PathVariable("sId") Long id, @RequestBody Student updateStudent) {
		Student student = this.service.updateStudent(id, updateStudent);
		student.setsName(updateStudent.getsName().trim());
		student.setsEmail(updateStudent.getsEmail().trim());
		student.setsAddress(updateStudent.getsAddress().trim());
		student.setsAge(updateStudent.getsAge().trim());
		student.setsClass(updateStudent.getsClass().trim());
		student.setsPhone(updateStudent.getsPhone().trim());

		student = this.service.updateStudent(id, student);

		System.out.println("Student update success...");
		return ResponseEntity.ok(student);
	}

	// Search Student by Name
	@GetMapping("/searchByName/{name}")
	public ResponseEntity<List<Student>> searchStudentsByName(@PathVariable("name") String name) {
		List<Student> students = service.searchStudentsByName(name);

		if (students.isEmpty()) {
			System.out.println("No students found with the given name: " + name);
			return ResponseEntity.notFound().build();
		}

		System.out.println("Students found with the name: " + name);
		return ResponseEntity.ok(students);
	}

}
