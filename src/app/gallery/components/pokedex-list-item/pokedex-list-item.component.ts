import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../../../core/models';

@Component({
  selector: 'app-pokedex-list-item',
  templateUrl: './pokedex-list-item.component.html',
  styleUrls: [ './pokedex-list-item.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokedexListItemComponent {
  isLoaded = false;

  @Input() item: Card;

  isLoadSuccess = () => this.isLoaded = true;

}
