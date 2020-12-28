import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from '../../../core/models';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { PokedexDialogComponent } from '../pokedex-dialog/pokedex-dialog.component';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: [ './pokedex-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PokedexListComponent implements OnChanges {
  @Input() pokemonList: Card[];
  productsList: Card[] = [];
  pagedList: Card[] = [];
  length = 0;
  pageSize = 10;
  pageSizeOptions: number[] = [ 10, 20, 50 ];

  constructor(public dialog: MatDialog) {
  }

  openDialog(item): void {
    this.dialog.open(PokedexDialogComponent, {
      data: item
    });
  }

  OnPageChange(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    this.pageSize = event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.length) {
      endIndex = this.length;
    }
    this.pagedList = this.productsList.slice(startIndex, endIndex);
  }

  trackByFn = ( index, item: Card): number => item.idx;

  ngOnChanges(changes: SimpleChanges): void {
    this.productsList = this.pokemonList;
    this.pagedList = this.productsList.slice(0, this.pageSize);
    this.length = this.productsList.length;
  }
}
