import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: string  = "http://localhost:4200"
  constructor(public http: HttpClient) { }

  saveHappines(happines: number): Observable<any> {
    this.http.post(this.url+"/api/save", happines);
  }
}
