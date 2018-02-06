import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FetchRecordsComponent } from './fetch-records/fetch-records.component';
import { AddRecordsComponent } from './add-records/add-records.component';




@NgModule({
  declarations: [
    AppComponent,
    FetchRecordsComponent,
    AddRecordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
