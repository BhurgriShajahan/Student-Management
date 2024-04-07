package student.management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import student.management.entities.Student;
@Repository
public interface StudentReposit extends JpaRepository<Student, Long> {
	
//    List<Student> findBySNameContainingIgnoreCase(String name);
	 
    // Custom query to search students by name, phone, and address
    @Query("SELECT s FROM Student s WHERE LOWER(s.sName) LIKE LOWER(CONCAT('%', :keyword, '%')) OR LOWER(s.sPhone) LIKE LOWER(CONCAT('%', :keyword, '%')) OR LOWER(s.sAddress) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Student> searchStudentsByNamePhoneAddress(@Param("keyword") String keyword);


}
