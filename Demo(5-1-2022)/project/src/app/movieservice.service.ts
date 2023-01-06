import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { moviemodel } from './moviemodel.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  public baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }

  getData(): Observable<moviemodel[]> {
    const url = this.baseUrl + "data";
    return this.http.get<moviemodel[]>(url);
  }
}
