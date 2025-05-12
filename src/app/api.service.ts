import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'https://learn-now.praispranav.com'
  constructor(private http: HttpClient) { }

  insertLead(data:any){
    return this.http.post(`${this.baseURL}/insert-leads`, data)
  }
}
