import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


const routes: Routes = [
  {
    path:"",
    component: MainLayoutComponent,
    children: [
      {
        path:"",
        component: HomeComponent
      },
      {
        path:"anasayfa",
        component: HomeComponent
      }
    ]

  },
  {
    path:"admin",
    component: AdminLayoutComponent

  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
