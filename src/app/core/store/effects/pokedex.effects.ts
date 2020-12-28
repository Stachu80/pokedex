import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../service/api.service';
import { PokedexActions } from '../actions';
import { Injectable } from '@angular/core';
import { catchError, exhaustMap, first, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { messenger } from '../../../shared/helper/messenger';
import { getAllPokemons } from '../selectors';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';


@Injectable()

export class PokedexEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
    public store: Store<AppState>
  ) {
  }

  getAllPokemones$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokedexActions.loadPokedexs),
      tap(() => messenger().effect('2. Effect caught loadPokeDex action')),
      exhaustMap(() =>
        this.apiService.loadAllPokemons().pipe(
          map((pokedex) => {
              const indexPokedex = pokedex.map((el, index) => {
                return { ...el, idx: index };
              });
              messenger().effect('4. Effect send action with data from api-service to reducer');
              return PokedexActions.loadPokedexsSuccess({ pokedex: indexPokedex });
            }
          ),
          catchError((error: Error) => of(PokedexActions.loadPokedexsFailure))
        )
      )
    )
  );

  /*updatePokemonesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PokedexActions.updatePokemonName),
      exhaustMap((payload) =>
        combineLatest([
            this.getAllPokemons$(),
            of(payload)
          ]
        )),
      map(([ allPokemon, payload ]) => {
          const item = payload.item;
          const filtered = allPokemon.cards.filter(el => el.idx !== item.idx);
          const pokedex = [ ...filtered, item ].sort((a, b) => a.idx - b.idx);
          return PokedexActions.loadPokedexsSuccess({ pokedex });
        }
      )
    ),
  );*/

  private getAllPokemons$ = () => this.store
    .select(getAllPokemons).pipe(
      first(val => val !== null)
    );
}
