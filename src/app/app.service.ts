import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url: string  = "http://localhost:8080"
  constructor(public http: HttpClient) { }

  saveHappines(happines: number): Observable<any> {
    let params = new HttpParams();
    
    return this.http.get(this.url+"/api/save", { params:  { "happiness": happines}},);
  }
}
