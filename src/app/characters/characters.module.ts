import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from '../hello.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [  CharacterDetailComponent,CharactersComponent, HelloComponent, ],
  providers: [HttpClientModule],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    LayoutModule
  ],
  exports: [CharacterDetailComponent,CharactersComponent]
})
export class CharactersModule { }
