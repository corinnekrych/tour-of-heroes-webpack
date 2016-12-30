import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './hero.fakes';

@Injectable()
export class HeroService {

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroes(latency:boolean = false): Promise<Hero[]> {
    if (!latency) {
      return Promise.resolve(HEROES);
    }

    let latencyInMs:number = this.getRandomLatency();
    console.debug(`HeroService::getHeroes() will fake an answer-delay of ${latencyInMs}ms`)

    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), latencyInMs);
    })
  }

  private getRandomLatency(min:number = 500, max:number = 3000) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
