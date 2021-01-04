import { createReducer, on } from '@ngrx/store';
import { DialogActions, PokedexActions } from '../actions';


export const metaInfoFeatureKey = 'metaInfo';

export interface MetaInfoState {
  totalCount;
  currentCardInDialog
}

export const initialState: MetaInfoState = {
  totalCount: 0,
  currentCardInDialog: null
};


export const metaInfoReducer = createReducer(
  initialState,
  on(PokedexActions.getTotalCount, (state, { totalCount }) => ({
        ...state,
        totalCount,
      }
    )
  ),

  on(DialogActions.openDialog, (state, { data }) => ({
        ...state,
        currentCardInDialog: data,
      }
    )
  ),

  on(DialogActions.closeDialog, (state) => ({
        ...state,
        currentCardInDialog: null,
      }
    )
  ),
);

