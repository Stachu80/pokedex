import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStoreModule } from './store/root-store.module';
import { containers } from './containers';
import { SharedModule } from '../shared/shared.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    ...containers,
    DialogComponent
  ],
  exports: [
    ...containers
  ],
  imports: [
    CommonModule,
    RootStoreModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CoreModule { }
