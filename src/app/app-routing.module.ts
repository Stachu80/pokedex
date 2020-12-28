import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then((mod) => mod.GalleryModule)
  },
  {
    path: '',
    redirectTo: '/gallery',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
