import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CourseCatalogService } from '../shared/coursecatalog.service';
import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  navigation = this.router.getCurrentNavigation();
  id: any;
  courseDetailsData: any;
  courseDetailsDataApi: any;


  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router, private catalogserice: CourseCatalogService) { }


  ngOnInit() {


    this.route.params.pipe(switchMap((p: Params) => this.catalogserice.getCourseDetails(p['id']))).subscribe(
      data => {
        this.courseDetailsDataApi = data;
        this.courseDetailsData = this.courseDetailsDataApi.entry;
        // console.log(data);
        console.log(this.courseDetailsData);
      }
    );
    // this.route.params.subscribe(params => {
    //   console.log(params['id']);
    // });

    // console.log(this.navigation.extras);
    // this.courseDetailsData = {
    //   ...this.navigation.extras
    // }


  }
  //Accordion
  @ViewChild(MatAccordion) accordion: MatAccordion;

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  //Schedule Campus
  openDialogScheduleCampus(): void {
    const dialogRef = this.dialog.open(ScheduleComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
