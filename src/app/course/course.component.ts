import { Component, OnInit } from '@angular/core';
import { CourseCatalogService } from '../shared/coursecatalog.service';
import { map, mergeMap } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseCatalogsData = [];
  constructor(private coursecatalogService: CourseCatalogService) { }

  ngOnInit(): void {
    this.coursecatalogService.getCourseCatalog().subscribe(
      (data) => {
        this.courseCatalogsData = data; 
        console.log(this.courseCatalogsData);
      }
    );
  };
}



