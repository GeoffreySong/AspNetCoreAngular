import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../../../../types/hero.type';
import { HeroService } from '../../../services/hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }
	hero: Hero;

	ngOnInit(): void {
		this.route.params.switchMap((parm: Params) => this.heroService.getHero(+parm['id'])).subscribe(hero => this.hero = hero);
	}

	goBack(): void {
		this.location.back();
	}
}