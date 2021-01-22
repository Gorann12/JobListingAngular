import { Component, OnInit, Input } from '@angular/core';
import { JobsDataService } from '../services/jobs-data.service';

@Component({
  selector: 'app-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss']
})
export class FilterContainerComponent implements OnInit {
  filters = [];

  constructor(private jobsDataService: JobsDataService) { }

  ngOnInit() {
    this.jobsDataService.getFilters().subscribe((filters) => {
      if(filters){
        this.filters = filters;
        // this.jobsDataService.getFilteredJobs();
      }
    })
  }

  deleteFilter(filter){
    this.jobsDataService.removeFilter(filter);
  }

  clearAllFilters(){
    this.jobsDataService.clearAllFilters();
  }
}
