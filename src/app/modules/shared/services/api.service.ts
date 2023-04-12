import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CountryListItemModel } from '../models/country-list-item.model';
import { map } from 'rxjs/operators';
import { ApiModelMapper } from '../mappers/api-model-mapper';
import { CountryDetailsModel } from '../models/country-list-item.model copy';
import { CountryApiResponseModel } from '../models/country-api-response.model';

@Injectable( { providedIn: 'root' } )
export class ApiService {

	private apiUrl = 'https://restcountries.com/v3.1/';

	public constructor( private apiModelMapper: ApiModelMapper, private http: HttpClient ) { }

	public getRegionCountriesApiCall( region: string ): Observable<Array<CountryListItemModel>> {

		return this.http.get<Array<CountryApiResponseModel>>( this.apiUrl + 'region/' + region )
			.pipe(
				map( response => response.map( ( country: CountryApiResponseModel )  => {

					return this.apiModelMapper.mapApiCountryListItemToAppCountryModel( country );

				} ) )
			);

	}

	public getCountryDetailsApiCall( country: string ): Observable<CountryDetailsModel> {

		return this.http.get<Array<CountryApiResponseModel>>( this.apiUrl + 'name/' + country )
			.pipe(
				map( response => {

					return this.apiModelMapper.mapApiCountryDetailsToAppCountryModel( response[0] );

				} )
			);

	}
}
