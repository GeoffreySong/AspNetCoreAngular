import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero/hero-detail/hero-detail.component';
import { HeroComponent } from './components/hero/hero/hero.component';

export const AppRoutes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'heroes', component: HeroComponent },
	{ path: 'detail/:id', component: HeroDetailComponent },
	{ path: '**', redirectTo: 'dashboard' }
]