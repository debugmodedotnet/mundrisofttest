import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FormsModule }						from '@angular/forms';
// import { HttpModule }							from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

import { FranchiseRoutingModule } from './franchise-routing.module';
import { FranchiseService }					  from './franchise.service';
import { FranchiseComponent }					  from './franchise.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [FranchiseComponent],
  imports: [
    CommonModule,
    CarouselModule,
    FranchiseRoutingModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSelectModule,
  ],
  providers: [
    FranchiseService    
  ]
})
export class FranchiseModule { }
