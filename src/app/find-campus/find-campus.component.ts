import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-find-campus',
  templateUrl: './find-campus.component.html',
  styleUrls: ['./find-campus.component.css']
})  
  export class FindCampusComponent implements OnInit {
    constructor(private router: Router, private dialogRef: MatDialogRef<FindCampusComponent>) { 
      
    }
    
    ngOnInit(): void {}
    
    navigateToFranciese() {this.router.navigateByUrl("/franchise");
    this.dialogRef.close();
  }

}