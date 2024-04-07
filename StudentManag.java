package student.management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class StudentManag {

		public static void main(String[] args) {
			SpringApplication.run(StudentManag.class, args);
			System.out.println("Application runing port on 8080");
		}
		
}
