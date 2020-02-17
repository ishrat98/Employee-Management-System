import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ListEmployeesComponent } from './components/list-employee/list-employee.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'employees', component: ListEmployeesComponent },
  { path: 'employees/create', loadChildren: './employee/employee.module#EmployeeModule' },
  // wild card route
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
