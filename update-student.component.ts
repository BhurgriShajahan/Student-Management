import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../service/student-service.service';
import { Student } from '../entities/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent {
  public errorMessage: any = '';

  public student = new Student();
  public sId: any;
  // constructor
  constructor(
    private route: ActivatedRoute,

    private service: StudentServiceService,
    private router: Router
  ) {}

  // Get Student by Id
  getStudentByID(id: any) {
    this.service.getStudentById(id).subscribe((data: any) => {
      this.student = data;
      this.sId = this.student.sId;
      console.log('student == id');
      console.log(`Id is ${this.sId}`);
    });
  }
  //Get Student id in ulr
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.getStudentByID(id);
  }
  // Handle Update Student Submit Form
  handleUpdateStudent(saveStudent: any): any {
    console.log(this.student);
    this.service
      .updateStudent(this.sId, this.student)
      .subscribe((data: any) => {
        console.log('Student updated..', data);
        alert('Student updated success');
        this.router.navigateByUrl('/home');
      });
  }

  // Back
  backClick = () => this.router.navigateByUrl('/home');
}
