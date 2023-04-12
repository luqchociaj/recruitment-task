import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const COUNTRY_DETAILS_URL = '/regions/country-details/'
const COUNTRY_LIST_URL = '/regions/country-list/'

@Injectable( { providedIn: 'root' } )
export class RoutingService {

	public selectedRegion: string;
	public constructor( private router: Router ) { }

	public navigateToCountryDetailsView( region: string, country: string ): void {

		this.router.navigate( [ COUNTRY_DETAILS_URL +  region + '/' +  country ] );

	}

	public navigateToRegionCountryList( region: string ): void {

		this.router.navigate( [ COUNTRY_LIST_URL + region ] );

	}

	public navigateToRegionList(): void {

		this.router.navigate( [ 'regions' ] );

	}

	public navigateBack( currentUrl: string ): void {

		if( currentUrl.includes( COUNTRY_DETAILS_URL ) ){

			//gets region substring from current app url
			const lastRegion = currentUrl.split( '/' )[3];

			this.navigateToRegionCountryList( lastRegion );

		}

		else if( currentUrl.includes( COUNTRY_LIST_URL ) ){

			this.navigateToRegionList();

		}

	}

}
