import { createFeatureSelector, createSelector } from '@ngrx/store';
import { metaInfoFeatureKey } from '../reducers/meta-info.reducer';


export const selectMetaInfo = createFeatureSelector<any>(metaInfoFeatureKey);
export const selectTotalCount = createSelector(selectMetaInfo, data => data.totalCount);
export const selectCurrentCard = createSelector(selectMetaInfo, data => data.currentCardInDialog);
