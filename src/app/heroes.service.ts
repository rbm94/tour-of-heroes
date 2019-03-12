import { Heroo } from './types/hero.type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroes: Heroo[] = [
    { id: 1, name: 'Le B' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'GreenLantern' },
    { id: 4, name: 'Hulk' },
    { id: 5, name: 'Superman' }

  ];
  idToGenerate: number = this.heroes.length + 1;
  getHeroes() {
    return this.heroes;
  }
  createHero(name: string) {
    return { id: this.idToGenerate++, name };
  }
}
