import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './hero.fakes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
