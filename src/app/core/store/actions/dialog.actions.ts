import { createAction, props } from '@ngrx/store';
import { Card } from '../../models';

export const loadDialogs = createAction(
  '[Dialog] Load Dialogs'
);


export const openDialog = createAction(
  '[Dialog] Open Card In Dialog',
  props<{ data: Card }>()
);
export const closeDialog = createAction(
  '[Dialog] Close Dialog',
);
