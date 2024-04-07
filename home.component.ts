import { Component } from '@angular/core';
import { StudentServiceService } from '../service/student-service.service';
import { Router } from '@angular/router';
import { Student } from '../entities/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public students: any[] = [];
  public searchTerm: string = '';
  public searchResults: Student[] = [];

  constructor(
    private studentService: StudentServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (response: any) => {
        this.students = response;
      },
      (error: any) => {
        console.log(`Students fetching error: ${error}`);
      }
    );
  }
  // Delete Student
  deleteById(sId: any): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudentById(sId).subscribe({
        next: () => {
          console.log('Student delete success with id ' + sId);
          alert('Student deleted success...');
          this.getAllStudents(); // Reload students after deletion
        },
        error: (error: any) => {
          console.log('Student delete failed', error);
        },
      });
    }
  }
  // Handle student details
  handleDetails(student: any): void {
    this.router.navigate(['/details', student.sId]);
  }

  // Update Student
  handleUpdateStudent(student: Student): void {
    let id: any = this.router.navigate(['/update', student.sId]);
  }

  // Search Student
  search(): void {
    if (this.searchTerm.trim() !== '') {
      this.studentService.searchStudents(this.searchTerm).subscribe(
        (data: Student[]) => {
          this.searchResults = data;
        },
        (error) => {
          console.error('Error occurred while searching:', error);
        }
      );
    } else {
      // Handle empty search term
      this.searchResults = [];
    }
  }
}
