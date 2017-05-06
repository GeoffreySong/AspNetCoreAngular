import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../types/hero.type';
import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
	constructor(private heroService: HeroService) { }
	heroes: Hero[];

	ngOnInit(): void { this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5)); }
}