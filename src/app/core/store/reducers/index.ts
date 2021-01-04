import { ActionReducerMap } from '@ngrx/store';
import { pokedexFeatureKey, pokeDexReducer, PokeDexState } from './pokedex.reducer';
import { metaInfoFeatureKey, metaInfoReducer, MetaInfoState } from './meta-info.reducer';

export interface AppState {
  [pokedexFeatureKey]: PokeDexState;
  [metaInfoFeatureKey]: MetaInfoState;
}

export const reducers: ActionReducerMap<AppState> = {
  [pokedexFeatureKey]: pokeDexReducer,
  [metaInfoFeatureKey]: metaInfoReducer,
};
