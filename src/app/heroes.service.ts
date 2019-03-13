import { Heroo } from './types/hero.type';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type' : 'application/json'
});


const httpOptions = {
  headers
}
@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient){

  }

  getHeroes(): Observable<Heroo[]> {
    return this.http.get<Heroo[]>(this.heroesUrl);
  }

  createHero(name: string): Observable<Heroo> {
    return this.http.post<Heroo>(this.heroesUrl, { name }, httpOptions );
  }
  getHeroById(id: number): Observable<Heroo> {
    return this.http.get<Heroo>(this.heroesUrl +  '/' + id);
  //   return this.heroes.find(hero => hero.id === id);

  //   for(const hero of this.heroes) {

  //    if (id === hero.id){
  //      return hero;
  //    }
  //   }
  //   return null;
  }
}
