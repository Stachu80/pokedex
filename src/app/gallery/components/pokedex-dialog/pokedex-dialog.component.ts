import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from '../../../core/models';
import { AppState } from '../../../core/store/reducers';
import { Store } from '@ngrx/store';
import { PokedexActions } from '../../../core/store/actions';

@Component({
  selector: 'app-pokedex-dialog',
  templateUrl: './pokedex-dialog.component.html',
  styleUrls: [ './pokedex-dialog.component.scss' ]
})
export class PokedexDialogComponent {


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Card,
    public store: Store<AppState>,
  ) {
  }

  changeInput(data, oldItem): void {
    const item = { ...oldItem, name: data.value };
    this.store.dispatch(PokedexActions.updatePokemonName({ item }));
  }

}
