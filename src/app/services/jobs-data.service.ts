import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JobsDataService {
  private filters: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) { } 

  getAllJobs(){
    return this.http.get<any[]>("../../assets/data/data.json");
  }

  addFilter(filter){
    if(!this.filters.value.includes(filter)){
      this.filters.next([...this.filters.value, filter]);
    }
  }

  getFilters(){
    return this.filters.asObservable();
  }

  removeFilter(filter){
    const index = this.filters.value.indexOf(filter);
    this.filters.value.splice(index, 1);
    this.filters.next([...this.filters.value]);
  }

  clearAllFilters(){
    this.filters.next([]);
  }

  getFilteredJobs(){
    let filteredJobs = [];
    this.getAllJobs().subscribe((jobs) => {
      [...jobs].forEach((job) => {
        if(this.isValid(job)) {
          filteredJobs.push(job);
          console.log(job);
        }
      })
    });
    
    return filteredJobs;
  }

  isValid(job){
    let isValid = true;
    this.filters.value.forEach((filter) => {
      console.log(filter);
      if(!job.tools.includes(filter) && !job.languages.includes(filter) && job.role !== filter && job.level !== filter){
        isValid = false;
      }
    })
    return isValid;
  }
}
