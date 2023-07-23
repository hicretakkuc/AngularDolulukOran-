import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { AdminNavComponent } from './nav/admin-nav/admin-nav.component';
import { ChartComponent } from './chart/chart.component';
import { ChartService } from './chart.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    MainNavComponent,
    AdminNavComponent,
    ChartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,






  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
