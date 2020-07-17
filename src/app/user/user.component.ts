import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegisterationService } from '../shared/userregisteration.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

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
  constructor(public dialog: MatDialog, private fb: FormBuilder, private userService: UserRegisterationService,  private router: Router) {

  }

  ngOnInit(): void {
    this.userRegistrationForm = this.fb.group({
      locale: ['en-us'],
      accept_terms_and_conditions: [true],
      email_address: [null, [Validators.required]],
      full_name: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmpassword: [null],
      title: [null],
      zip_code: [null]
    })
  }

  registerUser(): void {
    this.userRegistrationForm.value.title = this.userRegistrationForm.value.full_name.replace(/\s+/g, "");;
    this.userService.registerStudent(this.userRegistrationForm.value).subscribe(
      (data) => {
        console.log("student registered");
        console.log(data);
        this.resData.uid = data.entry.uid;
        this.resData.title = data.entry.title; 
        this.registerUserFlag = true; 
        this.userRegistrationForm.reset();
        this.router.navigateByUrl('/user/student');

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

