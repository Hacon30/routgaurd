import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { TableDataComponent } from './components/table-data/table-data.component';

const routes: Routes = [
  {path: '', component:AdminDashboardComponent,
  children: [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'news', component: NewsComponent},
    {path: 'calculator', component: CalculatorComponent},
    {path: 'table-data', component: TableDataComponent},
    {path: '', redirectTo: '/admin/home', pathMatch: 'full'}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
