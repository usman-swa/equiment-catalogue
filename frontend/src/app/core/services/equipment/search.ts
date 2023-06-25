import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from '../../models/equipment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  searchByLimit(limit: number): Observable<Equipment[]> {
    const url = `${this.apiUrl}/equipment/search?limit=${limit}`;
    return this.http.get<Equipment[]>(url);
  }

  getByNumber(number: number): Observable<Equipment> {
    const url = `${this.apiUrl}/equipment/${number}`;
    return this.http.get<Equipment>(url);
  }
}
