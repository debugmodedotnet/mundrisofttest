import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';


@Component({
  selector: 'app-coursegrid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CourseGridComponent implements OnInit, OnChanges {

  @Input() courseCatalogsData :any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.courseCatalogsData);
  }
  ngOnChanges(){
      console.log(this.courseCatalogsData);
  }

}
