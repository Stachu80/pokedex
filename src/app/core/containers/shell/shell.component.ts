import { ChangeDetectionStrategy, Component } from '@angular/core';
import { selectCurrentCard } from '../../store/selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { DialogActions } from '../../store/actions';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: [ './shell.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  selectedCard$ = this.store.select(selectCurrentCard);

  constructor(private store: Store<AppState>) {
  }

  closeDialog = () => this.store.dispatch(DialogActions.closeDialog())
}
