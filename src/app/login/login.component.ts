import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentLoginService } from '../shared/studentlogin.service';
import { Router, NavigationExtras } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  studentLoginForm: FormGroup;
  studentData: any;

  navigationExtras: NavigationExtras ={}; 
  
  constructor(public dialog: MatDialog, 
    private fb: FormBuilder, private loginService: StudentLoginService, 
    private router: Router, private dialogRef: MatDialogRef<LoginComponent >) { }

  ngOnInit(): void {

    this.studentLoginForm = this.fb.group({
      email_address: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })

  }
  

  loginStudent() {
    //alert("Login");
    console.log(this.studentLoginForm.value);
    this.loginService.loginStudent(this.studentLoginForm.value).subscribe(data => {
      this.studentData = data;
      console.log(data);
      if(this.studentData.entries.length == 1 ){
        console.log("tata");
        this.navigationExtras.state = {
           ... this.studentData.entries[0]
        }
        console.log(this.navigationExtras.state);
         this.router.navigateByUrl('/catalog/catalog',this.navigationExtras.state);
         this.dialogRef.close();
      }
    }
    );
  }
}
