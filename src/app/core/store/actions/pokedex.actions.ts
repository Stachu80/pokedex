import { createAction, props } from '@ngrx/store';
import { Card } from '../../models';

export const loadPokedexs = createAction(
  '[Pokedex] Load Pokedexs'
);

export const loadPokedexsSuccess = createAction(
  '[Pokedex] Load Pokedex Success',
  props<{ pokedex: Card[] }>()
);

export const loadPokedexsFailure = createAction(
  '[Pokedex] Load Pokedex Failure',
  props<{ error: any }>()
);
export const updatePokemonName = createAction(
  '[Pokedex]  updatePokemon Name',
  props<{
    item: Card
  }>()
);
