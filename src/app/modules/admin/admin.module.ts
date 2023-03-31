import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorrealDirective } from './components/shared/errorreal.directive';
import { TableDataComponent } from './components/table-data/table-data.component';
import { MatTableModule}  from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { CalculatorComponent } from './components/calculator/calculator.component';
@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    TableDataComponent,
    CalculatorComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule
  ]
})
export class AdminModule {

 }
