import { createAction, props } from '@ngrx/store';
import { Card } from '../../models';

export const startApp = createAction(
  '[Pokedex] Start App',
);


export const loadPokedexsCards = createAction(
  '[Pokedex] Load Pokedexs',
  props<{
    page: number,
    pageSize:number
  }>()
);

export const loadPokedexsSuccess = createAction(
  '[Pokedex] Load Pokedex Success',
  props<{ pokedex: Card[] }>()
);


export const getTotalCount = createAction(
  '[Pokedex]  Get Total Count',
  props<{ totalCount: number }>()
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
