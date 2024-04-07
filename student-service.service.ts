import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Student } from '../entities/student';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  constructor(public client: HttpClient, public router: Router) {}

  // ------------------------------------------------------------------------
  // searchStudentsUrl
  private searchStudentsUrl = 'http://localhost:8080/student/searchByName';

  // Get Student Details API
  private getStudentByIdUrl = 'http://localhost:8080/student/getStudentById';

  // Get all students API
  public getAllStudentsUrl = 'http://localhost:8080/student/getAllStudents';

  // Delete student By Id API-URL
  public deleteStudentByIdUrl =
    'http://localhost:8080/student/deleteStudentById';

  // Update Student URL
  public updateStudentUrl = 'http://localhost:8080/student/updateStudent';

  // Add new Student API-URL
  public addNewStudentUrl = 'http://localhost:8080/student/addNewStudent';

  // -------------------------------------------------------------------------

  // Method to fetch details of a student by ID
  getStudentById(id: any) {
    // Append the ID to the URL
    const url = `${this.getStudentByIdUrl}/${id}`;
    return this.client.get(url);
  }

  // Get all Students method
  getAllStudents() {
    return this.client.get(this.getAllStudentsUrl);
  }

  // Delete Student by Id method
  deleteStudentById(sId: any) {
    // Append sId to the URL
    const url = `${this.deleteStudentByIdUrl}/${sId}`;
    this.router.navigateByUrl('/home');
    return this.client.delete(url);
  }
  //Add new Student method
  addNewStudent(student: Student) {
    return this.client.post(this.addNewStudentUrl, student);
  }

  //Update Student method
  updateStudent(id: any, student: Student): any {
    return this.client.put(`${this.updateStudentUrl}/${id}`, student);
  }

  //Search student
  searchStudents(searchTerm: string) {
    return this.client.get<Student[]>(
      `${this.searchStudentsUrl}/${searchTerm}`
    );
  }
  // -------------------------------------------------------------------------
}
