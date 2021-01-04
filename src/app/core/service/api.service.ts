import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  loadAllPokemons(page = 1, pageSize = 10): Observable<Card[]> {


    messenger().info('3. Api-service get data from API');
    return this.http
      .get<any>(this.baseUrl + `cards?page=${ page }`+'&'+`pageSize=${ pageSize }`/*, {
        headers: new HttpHeaders({
          'Authorization': 'my-auth-token',
          'Count': '1'
        })
      }*/)
      .pipe(
        map((rawResponse: { cards: Card[] }) => rawResponse.cards),
      );
  }


  getCardsTotalCount() {
    messenger().info('TESST');
    return this.http
      .get<any>(this.baseUrl + 'cards', { observe: 'response' })
      .pipe(
        map((data) => data.headers.get('total-count'))
      );
  }

}
