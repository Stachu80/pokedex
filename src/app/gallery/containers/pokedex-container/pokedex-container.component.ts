import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/reducers';
import { getAllPokemons } from '../../../core/store/selectors';

@Component({
  selector: 'app-pokedex-container',
  templateUrl: './pokedex-container.component.html',
  styleUrls: [ './pokedex-container.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexContainerComponent {
  getAllPokemons$ = this.store.select(getAllPokemons);
  constructor(private store: Store<AppState>) {
  }
}
