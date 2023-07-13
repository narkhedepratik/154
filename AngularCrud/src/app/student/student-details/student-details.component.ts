import { Component } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent  {

constructor(public service:StudentService)
{

}
onSubmit(stu:Student)
{
  if(stu.id==0)
  {
  console.log(stu);
 this.service.saveStudent(stu).subscribe();
  }
  else{
    this.service.updateStudent(stu).subscribe();
  }
 window.location.reload();
}

}
