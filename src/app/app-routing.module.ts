import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'franchise', component: FranchiseComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'test', component: TestComponent },
  { path: 'course-details/:id', component: CoursedetailsComponent },
  { 
    path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) 
  },
  { path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
