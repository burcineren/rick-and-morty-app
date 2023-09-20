import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) {}

  // getFoodFacts(id: string): Observable<any> {
  //   //Write code calling service to obtain food fact data
  //   let url = `https://reqres.in/api/users?page=2`;
  //   return this.http.get(url);


  // }
}
