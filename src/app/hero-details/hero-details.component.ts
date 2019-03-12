import { Heroo } from './../types/hero.type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  // detailedHero: Herro;
  @Input() hero: Heroo;
  constructor() { }

  ngOnInit() {
  }

}
