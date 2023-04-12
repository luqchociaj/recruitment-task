import {
	Component, OnInit
} from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { RoutingService } from '../../shared/services/routing.service';
import { ActivatedRoute } from '@angular/router';
import { CountryListItemModel } from '../../shared/models/country-list-item.model';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component( {
	selector: 'app-country-list',
	templateUrl: './country-list.component.html',
	styleUrls: [ './country-list.component.scss' ]
} )
export class CountryListComponent implements OnInit {

	public isLoading = true;
	public selectedRegionName: string;
	public regionCountries$: Observable<Array<CountryListItemModel>>;

	public constructor(
		public apiService: ApiService,
		public route: ActivatedRoute,
		public routingService: RoutingService ) { }

	public ngOnInit(): void {

		this.loadCountryList();

	}

	public loadCountryList(): void {

		this.route.paramMap.subscribe( paramMap => {

			const regionNameParam = paramMap.get( 'region' );

			if ( regionNameParam && regionNameParam !== this.selectedRegionName ) {

				this.selectedRegionName = regionNameParam;
				this.regionCountries$ = this.apiService.getRegionCountriesApiCall( this.selectedRegionName )
					.pipe(
						catchError( ( error: HttpErrorResponse ) => {

							console.error( error );
							this.routingService.navigateToRegionList();
							return of( [] );

						} )
					);

			}

		} );

	}

}
