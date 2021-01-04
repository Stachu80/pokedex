import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatGridListModule,
    MatPaginatorModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedModule { }
