import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Moment } from 'moment';
import { CalendarComponent } from '../calendar/calendar.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StudentLoginService } from '../shared/studentlogin.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})


export class ScheduleComponent implements OnInit {
  
  coursedata : any;
  studentUser : any; 
  campusScheduleBtn: boolean = true;
  onlineScheduleBtn: boolean = false;
  campusSchedule: boolean = true; 
  onlineSchedule: boolean = false; 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  private loginService :StudentLoginService) {}

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

  addToCart(){
   
   this.studentUser= this.loginService.getLoggedInUser();
   console.log(this.studentUser);

    let dataToCart = {
     
          "title": "student name + Course Name + Date Time",
          "course_delivery_mode": "online",
          "purchased_cost": "$2,499",
          "Campus": "New Horizons, Portland",
          "schedule_date": "08-12-2020",
          "schedule_time": "time",
                 "student": [
                  {
                      "uid": "blt3bbb1a8fe16dea39",
                      "_content_type_uid": "student"
                  }
              ],
              "added_course": [
                  {
                      "uid": "blt397cf2844f7a3e47",
                      "_content_type_uid": "course"
                  }
              ]
          

      }

      alert("hey data");
      
  }
  campusView(){
    this.onlineScheduleBtn = false;
    this.campusScheduleBtn = true;
  }
  
  onlineView(){
    this.campusScheduleBtn = false;
    this.onlineScheduleBtn = true;
  }
}
