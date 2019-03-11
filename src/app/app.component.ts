import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  heroes = [
    'Superman',
    'Batman',
    'GreenLantern',
    'Hulk',
    'Le B',
  ];
  name = '';
  heroToAdd = '';


  addHero() {
    // const heroName = 'Thor';
    // if(this.heroToAdd === ''){
    if(this.heroToAdd.trim().length > 0){
    // if(this.heroToAdd !== ''){
    // if(this.heroToAdd.length > 0)

      // this.heroes.push(this.heroToAdd);
      this.heroes.push(this.heroToAdd.trim());
      this.heroToAdd = '';
    }
    else{
      alert('Veuillez entrer un nom de Hero !');
    }
  }
}