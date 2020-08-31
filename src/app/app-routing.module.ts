import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FindCampusComponent } from './find-campus/find-campus.component';
import { MyteamComponent } from './myteam/myteam.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'franchise', component: FranchiseComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'findacampus', component: FindCampusComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'myteam', component: MyteamComponent },  
  { path: 'course-details/:id', component: CoursedetailsComponent },
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "**",
    redirectTo: ""
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', useHash: false, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }






