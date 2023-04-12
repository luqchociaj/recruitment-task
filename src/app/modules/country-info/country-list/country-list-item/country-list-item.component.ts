import {
	Component, Input
} from '@angular/core';
import { CountryListItemModel } from 'src/app/modules/shared/models/country-list-item.model';
import { RoutingService } from 'src/app/modules/shared/services/routing.service';

@Component( {
	selector: 'app-country-list-item',
	templateUrl: './country-list-item.component.html',
	styleUrls: [ './country-list-item.component.scss' ]
} )
export class CountryListItemComponent {

	@Input() public country: CountryListItemModel;
	@Input() public region: string;

	public constructor( public routingService: RoutingService ){}

	public openDetailsView(){

		this.routingService.navigateToCountryDetailsView( this.region, this.country.name );

	}

}
