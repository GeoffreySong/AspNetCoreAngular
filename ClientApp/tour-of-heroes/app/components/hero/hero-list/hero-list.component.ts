import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../../../services/hero.service';


@Component({
	selector: 'hero-list',
	templateUrl: './hero-list.component.html',
	styleUrls: ['./hero-list.component.css'],	
})
export class HeroListComponent implements OnInit {
	constructor(private router: Router, private heroService: HeroService) { }
	selectedHero: any;
	heroes: any;

	ngOnInit(): void { this.heroService.getHeroes().then(heroes => this.heroes = heroes); }

	onSelect(hero): void {
		this.selectedHero = hero;
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
	add(name: string): void {
		name = name.trim();
		if (!name) return;

		this.heroService.addHero(name).then(a => this.heroes.push(a));
	}
	delete(hero: any): void {
		let id = hero.id;
		if (id <= 0) return;

		let index = this.heroes.indexOf(hero);
		let temp = index;
		this.heroService.deleteHero(id).then(() => this.heroes.splice(index, 1));

	}
}