import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';
import { Hero } from '../services/hero.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'recent-hero',
  templateUrl: './recent-hero.component.html',
  styleUrls: ['./recent-hero.component.css']
})
export class RecentHeroComponent implements OnInit {

  recentHeroes: Hero[];

  constructor(private context: ContextService) {

  }

  ngOnInit() {
    this.context.recent
        .subscribe(val => {
           this.recentHeroes = val;
           console.log("::::::REcentHEroComponentINIT " + JSON.stringify(val))
        });
  }

}
