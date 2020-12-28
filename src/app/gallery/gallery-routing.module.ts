import { RouterModule, Routes } from '@angular/router';
import { PokedexContainerComponent } from './containers/pokedex-container/pokedex-container.component';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {
    path: '',
    component: PokedexContainerComponent
  },
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class GalleryRoutingModule {
}
