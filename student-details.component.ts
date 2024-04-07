import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../service/student-service.service';
import { Student } from '../entities/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  public studentDetails = new Student();
  public errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.getStudentDetails(id); // Call the method to fetch student details
  }

  getStudentDetails(id: any): void {
    this.studentService.getStudentById(id).subscribe({
      next: (data: any) => {
        this.studentDetails = data;
      },
      error: (error: any) => {
        if (error.status === 404) {
          this.errorMessage = 'Student not found'; // Set specific message for student not found
        } else {
          console.log('Error fetching student details:', error);
        }
      },
    });
  }
}
