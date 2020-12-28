import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { containers } from './containers';
import { components } from './components';
import { GalleryRoutingModule } from './gallery-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { PokedexDialogComponent } from './components/pokedex-dialog/pokedex-dialog.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ...containers,
    ...components,
    PokedexDialogComponent
  ],
  exports: [
    ...containers,
    ...components
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatPaginatorModule,
    MatDialogModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
