import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsTableComponent } from "./news-table/news-table.component";
import { ContactUsComponent } from './contact-us/contact-us.component';
import {NewsDetailsComponent} from "./news-details/news-details.component";

const routes: Routes = [
  {path: '', component: NewsTableComponent },
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'news-details/:id', component: NewsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
