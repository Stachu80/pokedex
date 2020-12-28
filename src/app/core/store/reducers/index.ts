import { ActionReducerMap } from '@ngrx/store';
import { pokedexFeatureKey, pokeDexReducer, PokeDexState } from './pokedex.reducer';

export interface AppState {
  [pokedexFeatureKey]: PokeDexState;
}

export const reducers: ActionReducerMap<AppState> = {
  [pokedexFeatureKey]: pokeDexReducer,
};
