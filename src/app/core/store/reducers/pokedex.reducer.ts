import { createReducer, on } from '@ngrx/store';
import { PokedexActions } from '../actions';
import { Card } from '../../models';


export const pokedexFeatureKey = 'pokedex';

export interface PokeDexState {
  [key: number]: Card;
}

export const initialState: PokeDexState = {  };


export const pokeDexReducer = createReducer(
  initialState,
  on(PokedexActions.loadPokedexsSuccess, (state, { pokedex }) => ({
    ...state,
    ...pokedex,
  })),

/*  on(PokedexActions.updatePokemonName, (state, { item }) => ({
      ...state,
      [item.idx]: { ...state[item.idx], name: item.name }
    })
  ),*/
);

