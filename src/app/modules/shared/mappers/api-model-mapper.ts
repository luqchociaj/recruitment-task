import { Injectable } from '@angular/core';
import {  CountryListItemModel } from '../models/country-list-item.model';
import { CountryDetailsModel  } from '../models/country-list-item.model copy';
import { CountryApiResponseModel } from '../models/country-api-response.model';

@Injectable( { providedIn: 'root' } )
export class ApiModelMapper {

	public mapApiCountryListItemToAppCountryModel( country: CountryApiResponseModel ): CountryListItemModel {

		return {
			name: country.name.common,
			flag: country.flags.png
		};

	}

	public mapApiCountryDetailsToAppCountryModel( country: CountryApiResponseModel ): CountryDetailsModel {

		return {
			altSpelling: country.altSpellings[0],
			capital: country.capital && country.capital[0] ? country.capital[0] : undefined,
			currency: Object.keys( country.currencies )[0],
			flag: country.flags.png,
			population: this.createPopulationString( country.population )
		};

	}

	public createPopulationString( population: number ): string {

		if ( population >= 1000 && population < 1000000 ) {

			return ( population / 1000 ).toLocaleString( 'en-US', { maximumFractionDigits: 2 } ) + 'K';

		} else if ( population >= 1000000 ) {

			return ( population / 1000000 ).toLocaleString( 'en-US', { maximumFractionDigits: 2 } ) + 'M';

		} else {

			return population.toString();

		}

	}

}
