import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobCardComponent } from './job-card/job-card.component';
import { FilterContainerComponent } from './filter-container/filter-container.component';

@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent,
    FilterContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
