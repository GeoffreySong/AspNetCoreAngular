import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { HeroService } from '../../../services/hero.service';

@Component({
	selector: 'hero-search',
	templateUrl: './hero-search.component.html',
	styleUrls: ['./hero-search.component.css'],
})

export class HeroSearchComponent implements OnInit {
	heroes: Observable<any[]>;
	private searchTerms = new Subject<string>();

	constructor(private heroService: HeroService, private router: Router) { }
	
	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.heroes = this.searchTerms
			.debounceTime(300)        // wait 300ms after each keystroke before considering the term
			.distinctUntilChanged()   // ignore if next search term is same as previous
			.switchMap(term => term 
				? this.heroService.searchHeroes(term)
				: Observable.of<any[]>([])
			)
			.catch(error => {
				// TODO: add real error handling
				console.log(error);
				return Observable.of<any[]>([]);
			});
	}
	gotoDetail(hero: any): void {
		this.router.navigate(['/detail', hero.id]);
	}
}
