import { NgModule } from '@angular/core';
import {
	RouterModule, Routes
} from '@angular/router';

const routes: Routes = [ {
	path: '',
	redirectTo: '/regions',
	pathMatch: 'full'
},
{
	path: 'regions',
	loadChildren: () => import( './modules/country-info/country-info.module' ).then( m => m.CountryInfoModule )
},
{
	path: '**',
	redirectTo: '/regions',
	pathMatch: 'full'
} ];

@NgModule( {
	imports: [ RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
} )
export class AppRoutingModule { }
