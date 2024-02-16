import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharactersModule } from './characters/characters.module';
import { HomeComponent } from './characters/home/home.component';
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
    LayoutModule,
    HttpClientModule,
    LayoutModule,

    RouterModule.forRoot([
      {path: 'characters', component: HomeComponent},
      // {path: 'character-detail', component: CharacterDetailComponent},

      { path: 'character-detail/:id', component: CharacterDetailComponent },
      {path: '**', redirectTo: "/characters"},
    ])
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
