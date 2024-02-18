import { HttpClient } from "@angular/common/http";
import { Component, OnInit, VERSION } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BaseService } from "src/app/model/base.service";

@Component({
  selector: "character-detail",
  templateUrl: "./character-detail.component.html",
  styleUrls: ["./character-detail.component.css"],
})
export class CharacterDetailComponent implements OnInit {
  character: any;
  constructor(
    private route: ActivatedRoute,
    private baseService: BaseService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const characterId = +params["id"]; // Karakter ID'sini alın

      // Karakter detaylarını API'den çekin
      this.baseService.getCharacterById(characterId).subscribe((character) => {
        // Karakter detaylarını kullanın
        this.character = character;
        console.log(character);
      });
    });
  }
}
