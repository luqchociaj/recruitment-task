import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryInfoRoutingModule } from './country-info-routing.module';
import {
	CountryDetailsComponent, CountryListComponent, CountryListItemComponent, RegionCategoriesComponent
} from '.';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [
	RegionCategoriesComponent,
	CountryListComponent,
	CountryDetailsComponent,
	CountryListItemComponent
]

@NgModule( {
	declarations: [ ...COMPONENTS ],
	imports: [ CommonModule,
		CountryInfoRoutingModule,
		SharedModule ]
} )
export class CountryInfoModule { }
