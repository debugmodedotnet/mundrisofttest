import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
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
import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { MdePopoverModule } from '@material-extended/mde';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {PopoverModule} from "ngx-smart-popover";
import {MatBadgeModule} from '@angular/material/badge';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { CatalogComponent } from './catalog/catalog.component';
// import { FranchiseModule } from './franchise/franchise.module';
import { LoginComponent } from './login/login.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import {StarRatingComponent} from './shared/star-rating.component';
import { FindCampusComponent } from './find-campus/find-campus.component';
import { TestComponent } from './test/test.component';
import {CatalogfilterPipe} from './shared/catalog.pipe';
import { ScheduleComponent } from './schedule/schedule.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FranchiseComponent,
    RegisterDialogComponent,
    CatalogComponent,    
    LoginComponent,
    CoursedetailsComponent, 
    StarRatingComponent, 
    FindCampusComponent, 
    CatalogfilterPipe,
    TestComponent,
    ScheduleComponent,
    CalendarComponent,
    CheckoutComponent,    
  ],
  entryComponents: [
    RegisterDialogComponent,
    LoginComponent,
    FindCampusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
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
    MdePopoverModule,
    MatDatepickerModule,
    MatMomentDateModule, 
    PopoverModule,
    MatBadgeModule,
    MatStepperModule,
    MatAutocompleteModule, 
   
  ],
  providers: [{provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
