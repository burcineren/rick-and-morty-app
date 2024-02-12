import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersModule } from './characters/characters.module';
import { HelloComponent } from './hello.component';
import { LayoutModule } from './layout/layout.module';
import { BaseService } from './model/base.service';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,  
    CharactersModule, 
    HttpClientModule,
    LayoutModule,

    RouterModule.forRoot([
      {path: 'characters', component: CharactersComponent},
      // {path: 'character-detail', component: CharacterDetailComponent},

      { path: 'character-detail/:id', component: CharacterDetailComponent },
      {path: '**', redirectTo: "/characters"},
    ])
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
