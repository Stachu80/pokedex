import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PokedexEffects } from './pokedex.effects';

describe('PokedexEffects', () => {
  let actions$: Observable<any>;
  let effects: PokedexEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokedexEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PokedexEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
