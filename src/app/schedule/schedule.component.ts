import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Moment } from 'moment';
import { CalendarComponent } from '../calendar/calendar.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentLoginService } from '../shared/studentlogin.service';
import { CourseCatalogService } from '../shared/coursecatalog.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})


export class ScheduleComponent implements OnInit {

  coursedata: any;
  studentUser: any;
  campusScheduleBtn: boolean = true;
  onlineScheduleBtn: boolean = false;
  campusSchedule: boolean = true;
  onlineSchedule: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private loginService: StudentLoginService, private courseService: CourseCatalogService) { }

  ngOnInit(): void {
    this.coursedata = this.data.coursedetail;
    console.log(this.coursedata);

  }
  //Calendar
  @ViewChild('myCalendar')
  myCalendar: CalendarComponent;

  dateSelected(value: Moment) {
    //alert(value);
  }

  //Cmapus/Online Schedule
  showDiv = {
    campusSchedule: true,
    onlineSchedule: false,
  }

  addToBookMark(){


    alert("hey ");

    this.studentUser = this.loginService.getLoggedInUser();
    console.log(this.studentUser);
    let dataToCart = {

      "title": this.studentUser.entries[0].full_name + this.coursedata.course_name + new Date(),
      "student": [
        {
          "uid": this.studentUser.entries[0].uid,
          "_content_type_uid": "student"
        }
      ],
      "added_course": [
        {
          "uid": this.coursedata.uid,
          "_content_type_uid": "course"
        }
      ]


    }

    //alert("hey data");
    this.courseService.addToBookMark(dataToCart).subscribe(
      (data) => { 
        console.log(data);
        console.log("added to the bookmark");
        this.courseService.publishData("student_course_bookmark",data.entry.uid).subscribe((res)=>{
          console.log(res);
        },
        e=>{console.log(e);})
       },
      error => console.log(error)
    )









  }
  addToCart() {

    this.studentUser = this.loginService.getLoggedInUser();
    console.log(this.studentUser);
    let dataToCart = {

      "title": this.studentUser.entries[0].full_name + this.coursedata.course_name + new Date(),
      "course_delivery_mode": "online",
      "purchased_cost": "$2,499",
      "Campus": "New Horizons, Portland",
      "schedule_date": "08-12-2020",
      "schedule_time": "time",
      "student": [
        {
          "uid": this.studentUser.entries[0].uid,
          "_content_type_uid": "student"
        }
      ],
      "added_course": [
        {
          "uid": this.coursedata.uid,
          "_content_type_uid": "course"
        }
      ]


    }

    //alert("hey data");
    this.courseService.addToCart(dataToCart).subscribe(
      (data) => { 
        console.log(data);
        console.log("added to the cart");
        this.courseService.publishData("student_shopping_cart",data.entry.uid).subscribe((res)=>{
          console.log(res);
        },
        e=>{console.log(e);})
       },
      error => console.log(error)
    )

  }
  campusView() {
    this.onlineScheduleBtn = false;
    this.campusScheduleBtn = true;
  }

  onlineView() {
    this.campusScheduleBtn = false;
    this.onlineScheduleBtn = true;
  }
}
