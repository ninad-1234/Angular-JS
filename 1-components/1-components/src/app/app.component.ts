import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  @ViewChild('cardRef1',{read: ElementRef})
  card1 :CourseCardComponent;

  @ViewChild('cardRef2')
  card2 :CourseCardComponent;
  
  @ViewChild('container')
  containerDiv :ElementRef;

  // title = COURSES[0].description;

  // price = 9.95863326698;

  // rate = 0.67 ;

  // course = COURSES[0];

  // startDate = new Date(2000, 0, 1);

  onCourseSelected(course:Course){
    console.log("containerDiv",this.containerDiv);
  }



}
