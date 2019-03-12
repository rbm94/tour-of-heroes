import { Heroo } from './../types/hero.type';
import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Heroo[] = [];
  heroToAdd = '';
  // idToGenerate = 6;
  selectedHero: Heroo;
  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }
  selectHero(hero: Heroo) {
    this.selectedHero = hero;
  }
  addHero() {
    // const heroName = 'Thor';
    // if(this.heroToAdd === ''){
    // if(this.heroToAdd !== ''){
    // if(this.heroToAdd.length > 0)
    // // this.heroes.push(this.heroToAdd);
    // const hero = { id: 5, name: this.heroToAdd };
    if (this.heroToAdd.trim().length > 0) {
      this.heroes.push(this.heroesService.createHero(this.heroToAdd));
      // this.heroes.push(hero);
      this.heroToAdd = '';
    } else {
      alert('Veuillez entrer un nom de Hero !');
    }
  }
}



