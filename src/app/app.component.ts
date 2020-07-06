import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { LoginComponent } from './login/login.component';
import { FindCampusComponent } from './find-campus/find-campus.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular POC';

  constructor(public dialog: MatDialog) {}
  
    openDialog(): void {
      const dialogRef = this.dialog.open(RegisterDialogComponent, {
        
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');        
      });
    }

    openDialogLogin(): void {
      const dialogRef = this.dialog.open(LoginComponent, {
        
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');        
      });
    }

    openDialogFindCampus(): void {
      const dialogRef = this.dialog.open(FindCampusComponent, {
        
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');        
      });
    }
}
