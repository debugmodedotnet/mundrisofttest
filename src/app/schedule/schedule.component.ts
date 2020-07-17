import { Component, OnInit, ViewChild } from '@angular/core';
import { Moment } from 'moment';
import { CalendarComponent } from '../calendar/calendar.component';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})


export class ScheduleComponent implements OnInit {
  
  campusScheduleBtn: boolean = true;
  onlineScheduleBtn: boolean = false;
  campusSchedule: boolean = false; 
  onlineSchedule: boolean = false; 
  constructor() {}

  ngOnInit(): void {
  }
  @ViewChild('myCalendar')
  myCalendar: CalendarComponent;
 
  dateSelected(value: Moment) {
    //alert(value);
  }
  
  //Cmapus/Online Schedule
  showDiv = {
    campusSchedule: false,
    onlineSchedule: true,
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
