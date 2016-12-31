import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from '../services/hero.model';


@Injectable()
export class HeroSearchService {
  private apiBaseUrl:string = 'api';

  constructor(private http:Http) { }

  search(term:string):Observable<Hero[]> {
    return this.http
               .get(`${this.apiBaseUrl}/heroes/?name=${term}`)
               .map((r: Response) => r.json().data as Hero[]);
  }
}
