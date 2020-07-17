import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginComponent } from './login/login.component';
import { FindCampusComponent } from './find-campus/find-campus.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FormBuilder } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'One NH POC';

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
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

  //Schedule Campus
  openDialogScheduleCampus(): void {
    const dialogRef = this.dialog.open(ScheduleComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
