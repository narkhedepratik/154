import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentModule } from "src/app/student/student.module";
import { HttpClientModule } from "@angular/common/http";
import { StudentService } from './service/student.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,StudentModule,HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
