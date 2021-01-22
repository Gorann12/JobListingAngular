import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { JobsDataService } from '../services/jobs-data.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent implements OnInit {
  @Input() job;
  filters = [];

  constructor(private jobsDataService: JobsDataService) { }

  ngOnInit() {
    this.filters = this.job.tools.concat(this.job.languages);
    this.filters.push(this.job.role);
    this.filters.push(this.job.level);
  }

  submitFilter(filter){
    this.jobsDataService.addFilter(filter);
  }
}
