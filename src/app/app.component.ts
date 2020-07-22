import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginComponent } from './login/login.component';
import { FindCampusComponent } from './find-campus/find-campus.component';
import { FormBuilder } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { Router, NavigationEnd } from '@angular/router';
import { StudentLoginService } from './shared/studentlogin.service';
import { CourseCatalogService } from './shared/coursecatalog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'One NH POC';
  studentUser: any;
  studentId = Object.create(null);
  studentsCartData: any;
  cartNumber = undefined;
  studentsBookMarkData: any;
  bookMarkNumber = undefined;

  constructor(public dialog: MatDialog,
    private coursecatalogservice: CourseCatalogService,
    private router: Router, private studentService: StudentLoginService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    if (this.studentService.isLoggedIn()) {
      this.getCartData();
      this.getBookMarkData();
    }
  }
  // Register form
  openDialog(): void {
    const dialogRef = this.dialog.open(UserComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //Login form
  openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  //Find a Campus
  openDialogFindCampus(): void {
    const dialogRef = this.dialog.open(FindCampusComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  showCart() {
    if (this.studentService.isLoggedIn()) {
      this.getCartData();
    }

  }

  showBookMark(){
    if (this.studentService.isLoggedIn()) {
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

}
