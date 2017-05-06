import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	constructor(private heroService: HeroService) { }
	heroes: any[];

	ngOnInit(): void { this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5)); }
}