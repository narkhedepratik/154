import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient)
  {

  }

  stu:Student={
    id:0,
    name:'',
    marks:0.0,
    address:''
  }
  saveStudent(stu:Student)
  {
   return this.http.post("http://localhost:3000/student",stu);
  }
  GetAllStudents()
  {
    return this.http.get("http://localhost:3000/student");
  }
  updateStudent(stu:Student)
    {
      return this.http.put("http://localhost:3000/student/"+stu.id,stu)   
    }
  deleteStudent(id:number)
  {
    return this.http.delete("http://localhost:3000/student/"+id);
  }

}
