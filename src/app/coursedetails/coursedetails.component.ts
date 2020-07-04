import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';


@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Accordion
  @ViewChild(MatAccordion) accordion: MatAccordion;

  //Owl Carousel
  
}
