import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {
	private heroUrl = 'api/hero';
	private htmlHeader = new Headers({'Content-Type': 'application/json'})
	constructor(private http: Http) {
	}

	getHeroes(): Promise<any[]> {
		return this.http.get(this.heroUrl)
			.map(response => response.json())
			.toPromise();
	}
	getHero(id: number): Promise<any> {
		return this.http.get(`${this.heroUrl}/${id}`)
			.toPromise()
			.then(a => a.json());
	}
	addHero(name: string): Promise<any> {
		return this.http.post(this.heroUrl, JSON.stringify({ name: name }), { headers: this.htmlHeader })
			.map(response => response.json())
			.toPromise();
	}
	updateHero(hero: any): Promise<boolean> {
		return this.http.put(this.heroUrl, JSON.stringify(hero), { headers: this.htmlHeader })
			.toPromise()
			.then(() => true)
			.catch(() => false);
	}
	deleteHero(id: number): Promise<boolean> {
		return this.http.delete(`${this.heroUrl}/${id}`)
			.toPromise()
			.then(() => true)
			.catch(this.handleError);
	}
	searchHeroes(term: string): Observable<any[]> {
		return this.http.get(`${this.heroUrl}/?name=${term}`)
				.map(a => a.json());
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}

