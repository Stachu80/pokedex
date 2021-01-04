import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { containers } from './containers';
import { components } from './components';
import { GalleryRoutingModule } from './gallery-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ...containers,
    ...components,
  ],
  exports: [
    ...containers,
    ...components
  ],
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule,
  ]
})
export class GalleryModule { }
