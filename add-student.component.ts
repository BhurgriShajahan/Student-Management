import { Component } from '@angular/core';
import { Student } from '../entities/student';
import { NgForm } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { StudentServiceService } from '../service/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  public student = new Student();

  constructor(private service: StudentServiceService, private router: Router) {
    this.student = new Student();
    this.student.sClass = '';
  }
  // reset
  resetForm(res: NgForm) {
    res.reset();
  }
  // Add new Student
  handleAddNewStudent(saveStudentForm: any) {
    console.log(`Name is  ${this.student.sName}`);
    console.log(`Email is ${this.student.sEmail}`);
    console.log(`Address is ${this.student.sAddress}`);
    console.log(`Phone is ${this.student.sPhone}`);
    console.log(`Class is ${this.student.sClass}`);
    console.log(`Age is ${this.student.sAge}`);
    if (this.student != null) {
      this.service.addNewStudent(this.student).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/home');
      });
    }
    // Reset Form after submit form
    this.resetForm(saveStudentForm);
  }
}
