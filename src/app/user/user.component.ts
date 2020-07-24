import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegisterationService } from '../shared/userregisteration.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CourseCatalogService } from '../shared/coursecatalog.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userRegistrationForm: FormGroup;
  resData= {
    uid:'',
    title:''
  }
  registerUserFlag = false;
  registerUserForm = true;
  constructor(public dialog: MatDialog, 
    private fb: FormBuilder, 
    private userService: UserRegisterationService, 
    private courseService : CourseCatalogService,
     private router: Router) {

  }

  ngOnInit(): void {
    this.userRegistrationForm = this.fb.group({
      locale: ['en-us'],
      accept_terms_and_conditions: [true, [Validators.required]],
      email_address: [null, [Validators.required]],
      full_name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmpassword: [null, [Validators.required]],
      title: [null],
      zip_code: [null]
    })
  }

  registerUser(): void {
    this.userRegistrationForm.value.title = this.userRegistrationForm.value.full_name.replace(/\s+/g, "");;
    this.userService.registerStudent(this.userRegistrationForm.value).subscribe(
      (data) => {
        //console.log("student registered");
        //console.log(data);
        this.resData.uid = data.entry.uid;
        this.resData.title = data.entry.title; 
        this.registerUserFlag = true;
        this.registerUserForm = false; 
        this.userRegistrationForm.reset();
        this.courseService.publishData("student",this.resData.uid ).subscribe((res)=>{
          //console.log(res);
          //console.log('student published');
        },
        e=>{console.log(e);}
        )
        //this.router.navigateByUrl('/catalog/catalog');

      },
      (error) => { console.log(error) }
    )
  }

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

