import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import {CourseGridComponent} from './course-grid.component';
import {StarRatingComponent} from './star-rating.component';


@NgModule({
  declarations: [CourseComponent,CourseGridComponent, StarRatingComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
