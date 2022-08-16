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


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
