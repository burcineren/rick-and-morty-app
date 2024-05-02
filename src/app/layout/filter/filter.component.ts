import { Component } from "@angular/core";
import { BaseService } from "src/app/core/characters/characters.service";
import { Character } from "src/app/core/characters/characters.model";

@Component({
  selector: "filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent {
  characters: Character[] = [];
  filteredCharacters: Character[] = [];
  filterOptions = { name: "", species: "", status: "", gender: "" };
  statusOptions: string[] = ["Alive", "Dead", "Unknown"];
  genderOptions: string[] = ["Male", "Female", "Genderless", "Unknown"];

  constructor(private baseService: BaseService) {
    this.baseService.getCharacter().subscribe((res: any) => {
      this.characters = res.results;
      this.filteredCharacters = [...this.characters];
    });
  }

  filterCharacters(): void {
    this.filteredCharacters = this.characters.filter((character) => {
      return (
        character.name
          .toLowerCase()
          .includes(this.filterOptions.name.toLowerCase()) &&
        character.species
          .toLowerCase()
          .includes(this.filterOptions.species.toLowerCase()) &&
        character.status
          .toLowerCase()
          .includes(this.filterOptions.status.toLowerCase()) &&
        character.gender
          .toLowerCase()
          .includes(this.filterOptions.gender.toLowerCase())
      );
    });
  }

  clearFilters(): void {
    this.filterOptions = { name: "", species: "", status: "", gender: "" };
    this.filterCharacters();
  }
}
