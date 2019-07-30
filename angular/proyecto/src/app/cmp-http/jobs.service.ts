import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  URL: string = 'https://fluentjobs-fa22e.firebaseio.com/trabajos';

  constructor(private http: HttpClient) { }

  getJobs() {
    this.http.get(`${this.URL}.json`);
  }

}
