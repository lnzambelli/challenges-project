import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiEnciclopediaService {

  BASE_URL = "https://swapi.dev/api/people";

  constructor(private httpClient: HttpClient) { }

  search(term: string): Observable<any> {
    return this.httpClient.get<any>(`${this.BASE_URL}/?search=${term}`);
  }

  getDetails(id: number): Observable<any> | undefined {
    return this.httpClient.get<any>(`${this.BASE_URL}/${id}`);
  }

  get(page?: number): Observable<any> {
    return this.httpClient.get<any>(`${this.BASE_URL}/?page=${page || 1}`);
  }
 
}
