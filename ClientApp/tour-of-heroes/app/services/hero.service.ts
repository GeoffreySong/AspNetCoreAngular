import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Hero } from '../../types/hero.type';

@Injectable()
export class HeroService {
	constructor(private http: Http) {
	}

	getHeroes(): Promise<Hero[]> {
		return this.http.get('api/Data/GetHeroes')
			.map(response => response.json() as Hero[])
			.toPromise();
	}
	getHero(id: number): Promise<Hero> {
		return this.http.get(`api/Data/GetHero/${id}`)
			.map(response => response.json() as Hero)
			.toPromise();
	}
}

