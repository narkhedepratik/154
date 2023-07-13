import { Component,OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})



export class StudentListComponent implements OnInit{
  stuList:Student[]; 
  constructor(private service:StudentService){}
  ngOnInit(): void {
    this.service.GetAllStudents().subscribe((response:Student[])=>{
      this.stuList=response;
    })
  }
  editData(s:Student)
  {
     this.service.stu=Object.assign({},s);
  }
  deleteData(id:number)
  {
    this.service.deleteStudent(id).subscribe();
    window.location.reload();
  }
}
