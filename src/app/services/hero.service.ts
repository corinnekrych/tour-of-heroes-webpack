import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {
  private apiBaseUrl = 'api';   // @FIXME: refactor into environment
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http: Http) {}

  getHero(id: number): Promise<Hero> {
    return this.http.get(`${this.apiBaseUrl}/heroes/${id}`)
                    .toPromise()
                    .then(response => response.json().data as Hero)
                    .catch(this.handleError);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(`${this.apiBaseUrl}/heroes`)
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError);
  }

  update(hero:Hero): Promise<Hero> {
    return this.http.put(`${this.apiBaseUrl}/heroes/${hero.id}`, JSON.stringify(hero), {headers: this.headers})
                    .toPromise()
                    .then(() => hero)
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured: ', error);
    return Promise.reject(error.message || error);
  }
}
