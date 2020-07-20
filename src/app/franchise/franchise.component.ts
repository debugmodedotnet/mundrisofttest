import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FranchiseService } from '../shared/franchiese.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StarRatingComponent} from '../shared/star-rating.component'



@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent implements OnInit {
  // public franchiseObj:Franchise= new Franchise();
  // public _franchise:Entry= new Entry();

  franchiseData: any;
  courseData: any;
  contactusForm: FormGroup;
  titleValue: string;
  countries = [
    { 'id': 1, 'name': 'India', 'phone': '+91' },
    { 'id': 2, 'name': 'USA', 'phone': '+1' },
    { 'id': 3, 'name': 'UK', 'phone': '+12' }
  ];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: FranchiseService, private fb: FormBuilder) {

  }
  ngOnInit(): void {

    this.contactusForm = this.fb.group({
      enquiry_for: ["My Self"],
      title: [null],
      full_name: [null, Validators.required],
      email_address: [null, Validators.required],
      country: [],
      phone_number: [null, Validators.required],
      message: [null, Validators.required],
      zipcode: []
    })

    this.api.getfranchiseData().subscribe(
      (data) => {
        this.franchiseData = data.entry;
        console.log(this.franchiseData);
      },
      (error) => {
        console.log(error)
      }
    )

    this.api.getCourseData().subscribe(
      (data) => {
        this.courseData = data.entry;
        console.log(this.courseData);
      },
      (error) => {
        console.log(error);
      }
    )

  }


  contactUs() {
    console.log('contact us');

    this.titleValue = 'Contact Information submitted on' + new Date();
    this.contactusForm.controls['title'].setValue(this.titleValue);
    this.contactusForm.controls['country'].setValue('US');
    console.log(this.contactusForm.value);
    this.api.contactUs(this.contactusForm.value).subscribe(
      (data) => {
        console.log(data);
        console.log('contact us inserted');
        this.contactusForm.reset();
      },
      (error) => { console.log(error) }
    )

  }

  courseDetails(data) {
    console.log(data);
    this.router.navigateByUrl('/course-details/' + data.uid);
  }

  //Owl Carousel Trending Courses
  customOptionsCourses: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
  //Owl Carousel Trending Courses
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
