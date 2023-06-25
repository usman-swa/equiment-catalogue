import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Equipment } from "../../models";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  searchByLimit(limit: number): Observable<Equipment[]> {
    const url = `${this.apiUrl}/equipment/search?limit=${limit}`;
    return this.http.get<Equipment[]>(url);
  }

  getByNumber(num: number): Observable<Equipment> {
    const url = `${this.apiUrl}/equipment/${num}`;
    return this.http.get<Equipment>(url);
  }

  addEquipment(equipment: Equipment): Observable<Equipment> {
    const url = `${this.apiUrl}/equipment`;
    return this.http.post<Equipment>(url, equipment);
  }
}
