import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { StudentLoginService } from '../shared/studentlogin.service';
import { CourseCatalogService } from '../shared/coursecatalog.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  studentUser: any;
  studentId = Object.create(null);
  studentsCartData: any;
  cartNumber = undefined;
  studentsBookMarkData: any;
  bookMarkNumber = undefined;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder,
    private coursecatalogservice: CourseCatalogService,
    private studentService: StudentLoginService) { }

  cardType = new FormControl();
  cardoptions: string[] = ['Debit', 'Credit', 'MasterCard', 'Visa'];
  cardFilteredOptions: Observable<string[]>;

  country = new FormControl();
  countryoptions: string[] = ['USA', 'UK', 'Germany', 'India'];
  countryFilteredOptions: Observable<string[]>;

  ngOnInit(): void {


    //Card Type
    this.cardFilteredOptions = this.cardType.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    //Country
    this.countryFilteredOptions = this.country.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    if (this.studentService.isLoggedIn()) {
      this.getCartData();
      this.getBookMarkData();
    }
  }


  getCartData() {

    this.studentUser = this.studentService.getLoggedInUser();
    this.studentId['student.uid'] = this.studentUser.entries[0].uid;
    // this.studentId['student.uid']= 'blt3bbb1a8fe16dea39';
    this.coursecatalogservice.getStudentCart(this.studentId).subscribe(
      (data) => {
        console.log(data);
        this.studentsCartData = data.entries;
        this.cartNumber = this.studentsCartData.length;
        console.log(this.studentsCartData);
      },
      error => console.log(error)
    )
    console.log(this.studentUser);

  }

  getBookMarkData() {

    this.studentUser = this.studentService.getLoggedInUser();
    this.studentId['student.uid'] = this.studentUser.entries[0].uid;
    // this.studentId['student.uid']= 'blt3bbb1a8fe16dea39';
    this.coursecatalogservice.getStudentBookMark(this.studentId).subscribe(
      (data) => {
        console.log(data);
        this.studentsBookMarkData = data.entries;
        this.bookMarkNumber = this.studentsBookMarkData.length;
        console.log(this.studentsBookMarkData);
      },
      error => console.log(error)
    )
  }




  addToPurchase() {

    //alert("hey");

    this.studentUser = this.studentService.getLoggedInUser();
    //console.log(this.studentUser);

    //console.log(this.studentsCartData);
    //let s = this.studentsCartData[0];

    //console.log(s);

    for (let s of this.studentsCartData) {
      
      let dataToCart = {

        "title": s.title,
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
        "purchased_course": [
          {
            "uid": s.added_course[0].uid,
            "_content_type_uid": "course"
          }
        ]
      }

      this.coursecatalogservice.addToPurchaedCourse(dataToCart).subscribe(
        (data) => {
          console.log(data);
          //console.log("added to the cart");
          this.coursecatalogservice.publishData("student_purchased_course", data.entry.uid).subscribe((res) => {
            console.log(res);
          },
            e => { console.log(e); })
        },
        error => console.log(error)
      )


    }

  }



  //Card Type
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countryoptions.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


}
