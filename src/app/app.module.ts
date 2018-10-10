import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { BehaviorComponent } from './behavior/behavior.component';
import { MyrecommendationComponent } from './myrecommendation/myrecommendation.component';
const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  } ,
  {
    path: 'recommendations',
    component: MyrecommendationComponent
  },
   {
    path: 'delegations',
   component: ReportsComponent
  },
   {
    path: 'managementreports',
    component: ReportsComponent
  }
  ,
   {
    path: 'performancereports',
    component: ReportsComponent
  }
  ,
   {
    path: 'comments',
   component: ReportsComponent
  },
  {
    path:'dashboard/behavior/:technicianId',
    component:BehaviorComponent,
    data: [{isDev: true}]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DashboardComponent,
    ReportsComponent,
    BehaviorComponent,
    MyrecommendationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule,RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
