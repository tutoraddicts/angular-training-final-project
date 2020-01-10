import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmpListComponent} from './emp-list/emp-list.component';
import { HomeComponent} from './home/home.component'
import { DeptListComponent } from './dept-list/dept-list.component'
import { AboutComponent } from './about/about.component'


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path : 'about', component: AboutComponent},
  {path: 'emplist', component: EmpListComponent},
  {path : 'deptlist', component: DeptListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  EmpListComponent, 
  HomeComponent, 
  DeptListComponent,
  AboutComponent
];
