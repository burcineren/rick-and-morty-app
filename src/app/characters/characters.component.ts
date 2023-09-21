import { Component, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "../model/base.service";
import { Character } from "../model/character.model";

@Component({
  selector: "characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.css"],
})
export class CharactersComponent {
  character:  Character[] = [];
  filteredCharacters: Character[] = [];
  filterOptions = { name: '', species: '', status: '', gender: '' };
  constructor(private baseService: BaseService) {
    this.baseService
      .getCharacter()
      .subscribe((res: any) => (this.character = res.results));
  }
  filterCharacters(): void {
    // Filtreleme işlemini gerçekleştirin
    this.filteredCharacters = this.character.filter(character => {
      return (
        character.name.toLowerCase().includes(this.filterOptions.name.toLowerCase()) &&
        character.species.toLowerCase().includes(this.filterOptions.species.toLowerCase()) &&
        character.status.toLowerCase().includes(this.filterOptions.status.toLowerCase()) &&
        character.gender.toLowerCase().includes(this.filterOptions.gender.toLowerCase())
      );
    });
  }
}
