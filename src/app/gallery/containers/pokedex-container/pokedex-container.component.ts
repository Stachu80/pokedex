import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/reducers';
import { selectAllPokemons, selectTotalCount } from '../../../core/store/selectors';
import { DialogActions, PokedexActions } from '../../../core/store/actions';

@Component({
  selector: 'app-pokedex-container',
  templateUrl: './pokedex-container.component.html',
  styleUrls: [ './pokedex-container.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexContainerComponent {
  selectAllPokemons$ = this.store.select(selectAllPokemons);
  selectTotalCount$ = this.store.select(selectTotalCount);

  constructor(private store: Store<AppState>) {
  }

  openDialog = (event) =>
    this.store.dispatch(DialogActions.openDialog({ data: event }));


  loadCards = (event) =>
    this.store.dispatch(PokedexActions.loadPokedexsCards({ page: event.page, pageSize: event.pageSize }));

}
