import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsTableComponent } from "./news-table/news-table.component";
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component: NewsTableComponent },
  {path: 'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
