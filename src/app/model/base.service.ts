import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BaseService {

  baseUrl: string = "https://rickandmortyapi.com/api/";
  
  constructor(private http: HttpClient) { }

  getCharacter(): Observable<[]> {
    return this.http.get<[]>(this.baseUrl + 'character');
  }
  getCharacterById(id: number): Observable<[]> {
    const url = `${this.baseUrl}/character/${id}`;
    return this.http.get<[]>(url);
  }
}
