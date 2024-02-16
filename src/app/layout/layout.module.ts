import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FilterComponent } from './filter/filter.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CharacterCardsComponent } from './character-cards/character-cards.component';
@NgModule({
  // declarations: [
  //   CharacterCardsComponent,
  // ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
  ],
  // exports:[CharacterCardsComponent]
})
export class LayoutModule { }
