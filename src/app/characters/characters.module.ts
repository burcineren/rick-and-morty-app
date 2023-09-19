import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [  CharacterDetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ,RouterModule
  ],
  exports: [CharacterDetailComponent]
})
export class CharactersModule { }
