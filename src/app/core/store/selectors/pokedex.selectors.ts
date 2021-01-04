import { createFeatureSelector, createSelector } from '@ngrx/store';
import { pokedexFeatureKey, } from '../reducers/pokedex.reducer';


export const selectPokeDexState = createFeatureSelector<any>(pokedexFeatureKey);
export const selectAllPokemons = createSelector(selectPokeDexState, (pokemons) => Object.values(pokemons));

