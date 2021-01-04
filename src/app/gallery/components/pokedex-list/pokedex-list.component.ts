import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { Card, PagesInfo } from '../../../core/models';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: [ './pokedex-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PokedexListComponent implements OnChanges {
  @Output() selectedPageAndPageSize = new EventEmitter<PagesInfo>();
  @Output() selectedCard = new EventEmitter<Card>();

  @Input() pokemonList: Card[] = [];
  @Input() totalCount: number = 0;

  productsList: Card[] = [];
  pagedList: Card[] = [];
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [ 10, 20, 50 ];

  openDialog = (item): void => this.selectedCard.emit(item);
  trackByFn = (index, item: Card): number => item.idx;

  OnPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    this.pageSize = event.pageSize;
    const endIndex = startIndex + event.pageSize > this.length ? this.length : startIndex + event.pageSize;
    this.selectedPageAndPageSize.emit({ page: event.pageIndex + 1, pageSize: event.pageSize });
    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.productsList = this.pokemonList;
    this.pagedList = this.productsList.slice(0, this.pageSize);
    this.length = this.totalCount;
  }
}
