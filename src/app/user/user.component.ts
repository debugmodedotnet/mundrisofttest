import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegisterationService } from '../shared/userregisteration.service';

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
  constructor(private fb: FormBuilder, private userService: UserRegisterationService) {

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

      },
      (error) => { console.log(error) }
    )
  }

}

