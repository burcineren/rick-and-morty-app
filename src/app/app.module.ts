import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { CharacterDetailComponent } from "./pages/character-detail/character-detail.component";
import { CharactersModule } from "./pages/characters.module";
import { HomeComponent } from "./pages/home/home.component";
import { LayoutModule } from "./layout/layout.module";
import { BaseService } from "./core/characters/characters.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: "characters", component: HomeComponent },
      { path: "character-detail/:id", component: CharacterDetailComponent },
      { path: "**", redirectTo: "/characters" },
    ]),
  ],
  providers: [BaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
