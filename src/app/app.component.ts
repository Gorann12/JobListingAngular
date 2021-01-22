import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { JobsDataService } from './services/jobs-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // jobs = this.jobsService.getAllJobs();
  highlightedJobs = [];
  length = 0;

  constructor(private jobsService: JobsDataService){
  }

  ngOnInit(){
    this.jobsService.getFilters().subscribe((filters) => {
      this.length = filters.length;
      this.highlightedJobs = this.jobsService.getFilteredJobs();
    })
  }

}
