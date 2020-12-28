import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { Store } from '@ngrx/store';
import { messenger } from './shared/helper/messenger';
import { PokedexActions } from './core/store/actions';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [ {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    multi: true,
    deps: [ Store ]
  } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

export function appInit(store: Store): any {
  return () => {
    messenger().boot('[1. Bootstrap App]');
    store.dispatch(PokedexActions.loadPokedexs());
  };
}

