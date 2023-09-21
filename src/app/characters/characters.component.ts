import { Component, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "../model/base.service";

@Component({
  selector: "characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.css"],
})
export class CharactersComponent {
  character: any;
  constructor(private baseService: BaseService) {
    this.baseService
      .getCharacter()
      .subscribe((res: any) => (this.character = res.results));
  }
}
