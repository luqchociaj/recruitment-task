import {
	Component, OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/services/api.service';
import { CountryDetailsModel } from '../../shared/models/country-list-item.model copy';
import { RoutingService } from '../../shared/services/routing.service';

@Component( {
	selector: 'app-country-details',
	templateUrl: './country-details.component.html',
	styleUrls: [ './country-details.component.scss' ]
} )
export class CountryDetailsComponent implements OnInit {

	public isLoading = true;
	public selectedCountryName: string;
	public selectedCountryDetails: CountryDetailsModel;

	public constructor(
		public apiService: ApiService,
		public route: ActivatedRoute,
		public routingService: RoutingService ) { }

	public ngOnInit(): void {

		this.loadCountryDetails();

	}

	public loadCountryDetails(): void {

		this.route.paramMap.subscribe( paramMap => {

			const countryNameParam = paramMap.get( 'country' );

			if ( countryNameParam ) {

				this.selectedCountryName = countryNameParam;
				this.apiService.getCountryDetailsApiCall( this.selectedCountryName )
					.subscribe( countryDetails => {

						if( countryDetails ){

							this.selectedCountryDetails = countryDetails
							this.isLoading = false;

						}

					},( ) => {

						this.routingService.navigateToRegionList();

					} )

			}

		} );

	}
}
