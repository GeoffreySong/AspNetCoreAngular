import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppRoutes } from './app.routes';
import { AppComponent } from './components/app/app.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroService } from './services/hero.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
		DashboardComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
		RouterModule.forRoot(AppRoutes)
	],
	providers: [
		HeroService
	]

})
export class AppModule {
}
