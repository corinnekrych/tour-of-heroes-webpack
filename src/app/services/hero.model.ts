export class Hero {
  id: number;
  name: string;
}

export enum VisitedAction {
    Add,
    Delete
}

export class HeroVisitedAction {
  action: VisitedAction;
  hero: Hero;
}
