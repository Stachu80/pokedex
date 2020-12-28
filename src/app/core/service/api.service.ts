import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from '../models';
import { messenger } from '../../shared/helper/messenger';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly baseUrl = 'https://api.pokemontcg.io/v1/';

  constructor(private http: HttpClient) {
  }

  loadAllPokemons(): Observable<Card[]> {
   messenger().info('3. Api-service get data from API');
   return this.http
      .get<any>(this.baseUrl + 'cards')
      .pipe(
        map((rawResponse: { cards: Card[] }) => rawResponse.cards),
      );
  }
}
