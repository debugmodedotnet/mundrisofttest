import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'franchise', component: FranchiseComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'course', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
