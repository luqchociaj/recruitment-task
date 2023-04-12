import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { RoutingService } from '../../shared/services/routing.service';

interface RegionCardConfig {
	regionName: string;
	imageSrc: string;

}

@Component( {
	selector: 'app-region-categories',
	templateUrl: './region-categories.component.html',
	styleUrls: [ './region-categories.component.scss' ]
} )
export class RegionCategoriesComponent {

	public readonly regions: RegionCardConfig[] = [
		{
			regionName: 'Africa',
			imageSrc: 'assets/images/africa.jpg'
		},
		{
			regionName: 'Americas',
			imageSrc: 'assets/images/americas.jpg'
		},
		{
			regionName: 'Asia',
			imageSrc: 'assets/images/asia.jpg'
		},
		{
			regionName: 'Europe',
			imageSrc: 'assets/images/europe.jpg'
		},
		{
			regionName: 'Oceania',
			imageSrc: 'assets/images/oceania.jpg'
		}
	];

	public constructor( public api: ApiService, public routingService: RoutingService ) { }

	public openRegionCountryList( region: RegionCardConfig ): void {

		this.routingService.navigateToRegionCountryList( region.regionName );

	}

}
