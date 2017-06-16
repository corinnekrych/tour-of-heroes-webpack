import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';
import { Hero } from '../services/hero.model';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'recent-hero',
  templateUrl: './recent-hero.component.html',
  styleUrls: ['./recent-hero.component.css']
})
export class RecentHeroComponent {
  sub: Subscription;
  recentHeroes: Hero[];

  constructor(private context: ContextService) {
    console.log("::RecentHeroComponent1");
    if (this.sub == null) {
      console.log("::RecentHeroComponent2");
      this.sub = context.recent.subscribe(val => {
        console.log("::RecentHeroComponent3");
        this.recentHeroes = val;
        console.log("::RecentHeroComponent::Constructor::" + JSON.stringify(val))
      });
    }
  }

}
