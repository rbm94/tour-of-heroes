import { Heroo } from './../types/hero.type';
import { HeroDetailsComponent } from './../hero-details/hero-details.component';
import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
  id: number;
  hero: Heroo;

  constructor(
    private route: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    this.id = Number(route.snapshot.paramMap.get('id'));
  }
  ngOnInit() {
    this.heroesService.getHeroById(this.id).subscribe(
      (hero: Heroo) => this.hero = hero
    );
  }
}
