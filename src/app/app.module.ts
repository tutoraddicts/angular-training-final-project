import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeePipe } from './employee.pipe';
import { HomeComponent } from './home/home.component';
import { GenderFilterComponent } from './gender-filter/gender-filter.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmployeePipe,
    HomeComponent,
    GenderFilterComponent,
    DeptListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
