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

}