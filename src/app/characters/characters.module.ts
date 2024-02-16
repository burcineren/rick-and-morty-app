import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '../layout/layout.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [  CharacterDetailComponent, HomeComponent, ],
  providers: [HttpClientModule],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    LayoutModule
  ],
  exports: [CharacterDetailComponent,HomeComponent]
})
export class CharactersModule { }
