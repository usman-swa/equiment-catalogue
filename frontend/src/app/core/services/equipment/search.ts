import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:3000'; // Replace with your Node.js server URL

  constructor(private http: HttpClient) { }

  searchByNumber(number: number): Observable<any> {
    const url = `${this.apiUrl}/equipment/search?limit=${number}`;
    return this.http.get(url);
  }
}
