import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent  {

  name = 'Angular ' + VERSION.major;
  character: any;

  constructor(private http: HttpClient) {
    this.http.get('https://rickandmortyapi.com/api/character').subscribe((res: any) => {
      this.character = res.results;
      console.log(this.character);
    })
  }

}
