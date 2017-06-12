import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';
import { Hero } from '../services/hero.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'recent-hero',
  templateUrl: './recent-hero.component.html',
  styleUrls: ['./recent-hero.component.css']
})
export class RecentHeroComponent {

  recentHeroes: Hero[];

  constructor(private context: ContextService) {
    context.recent.subscribe(val => {
           this.recentHeroes = val;
           console.log("::RecentHeroComponent::Constructor::" + JSON.stringify(val))
     });
  }

}
