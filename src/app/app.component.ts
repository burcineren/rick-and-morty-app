import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  character: any;

  constructor(private http: HttpClient) {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe((res: any) => {
      this.character = res.results;
      console.log(this.character);
    })
  }
}
