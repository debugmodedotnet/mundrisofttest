import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
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
import { MatExpansionModule } from '@angular/material/expansion';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { LoginComponent } from './login/login.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import {StarRatingComponent} from './shared/star-rating.component';
import { FindCampusComponent } from './find-campus/find-campus.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterDialogComponent,
    CatalogComponent,
    FranchiseComponent,
    LoginComponent,
    CoursedetailsComponent, 
    StarRatingComponent, 
    FindCampusComponent, 
    TestComponent,
    
  ],
  entryComponents: [
    RegisterDialogComponent,
    LoginComponent,
    FindCampusComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    MatExpansionModule,
    CarouselModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
