import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//templateUrl: './student.component.html',

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {

    navigation = this.router.getCurrentNavigation();
    studentData :any; 
    constructor(private router: Router) { }


    ngOnInit(): void {

        console.log(this.navigation.extras);
        this.studentData= {
            ...this.navigation.extras
        }
        //const data = this.navigation.extras.state ; 
        //console.log(data);
    }


}
