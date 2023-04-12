import { NgModule } from '@angular/core';
import {
	RouterModule, Routes
} from '@angular/router';
import { RegionCategoriesComponent } from './region-categories/region-categories.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [ {
	path: '',
	component: RegionCategoriesComponent
},

{
	path: 'country-list/:region',
	component: CountryListComponent
},

{
	path: 'country-details/:region/:country',
	component: CountryDetailsComponent
} ];

@NgModule( {
	imports: [ RouterModule.forChild( routes ) ],
	exports: [ RouterModule ]
} )
export class CountryInfoRoutingModule { }
