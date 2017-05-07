import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';

import { AppRoutes } from './app.routes';
import { HeroService } from './services/hero.service';
import { AppComponent } from './components/app/app.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroComponent } from './components/hero/hero/hero.component';
import { HeroListComponent } from './components/hero/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero/hero-search/hero-search.component';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
		DashboardComponent,
		HeroComponent,
		HeroListComponent,
		HeroDetailComponent,
		HeroSearchComponent,
    ],
    imports: [
		UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
		FormsModule,
		RouterModule.forRoot(AppRoutes)
	],
	providers: [
		HeroService
	]

})
export class AppModule {
}
