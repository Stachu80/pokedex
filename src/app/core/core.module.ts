import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStoreModule } from './store/root-store.module';
import { containers } from './containers';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ...containers
  ],
  exports: [
    ...containers
  ],
  imports: [
    CommonModule,
    RootStoreModule,
    SharedModule
  ]
})
export class CoreModule { }
