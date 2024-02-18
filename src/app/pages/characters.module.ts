import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CharacterDetailComponent } from "./character-detail/character-detail.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { LayoutModule } from "../layout/layout.module";
import { HomeComponent } from "./home/home.component";
import { FilterComponent } from "../layout/filter/filter.component";
import { SideBarComponent } from "../layout/side-bar/side-bar.component";
import { CharacterCardsComponent } from "../layout/character-cards/character-cards.component";

@NgModule({
  declarations: [
    CharacterDetailComponent,
    HomeComponent,
    FilterComponent,
    SideBarComponent,
    // CharacterCardsComponent
  ],

  imports: [BrowserModule, FormsModule, RouterModule, HttpClientModule],
  exports: [CharacterDetailComponent, HomeComponent],
})
export class CharactersModule {}
