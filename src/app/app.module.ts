import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from './app.component';
import { NewsTableComponent } from './news-table/news-table.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    AppComponent,
    NewsTableComponent,
    ContactUsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
