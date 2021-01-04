import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PokedexActions } from '../../store/actions';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: [ './dialog.component.scss' ]
})
export class DialogComponent {
  @Input() card: Card = null;
  @Output() closeDialog = new EventEmitter();

  close = () => this.closeDialog.emit();

  changeInput(data, oldItem): void {
    const item = { ...oldItem, name: data.value };
    //this.store.dispatch(PokedexActions.updatePokemonName({ item }));
  }
}
