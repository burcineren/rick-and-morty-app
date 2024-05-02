import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { BaseService } from 'src/app/core/characters/characters.service';

export class Characters {
  static readonly type = '[Zoo] FeedAnimals';
  constructor(public animalsToFeed: string) {}
}

export interface CharactersStateModel {
  characters: string[];
}

@State<CharactersStateModel>({
  name: 'characters',
  // defaults: {
  //   characters: []
  // }
})
@Injectable()
export class CharactersState {
  constructor(private baseService: BaseService) {}

  @Action(Characters)
  feedAnimals(ctx: StateContext<CharactersStateModel>, action: Characters) {
    
 
  }
}