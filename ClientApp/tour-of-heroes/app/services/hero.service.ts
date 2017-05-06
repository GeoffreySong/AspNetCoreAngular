import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HeroService {
	constructor(private http: Http) {
	}

	getHeroes(): Promise<any[]> {
		return this.http.get('api/Data/GetHeroes')
			.map(response => response.json())
			.toPromise();
	}
	getHero(id: number): Promise<any> {
		return this.http.get(`api/Data/GetHero/${id}`)
			.map(response => response.json())
			.toPromise();
	}
}

