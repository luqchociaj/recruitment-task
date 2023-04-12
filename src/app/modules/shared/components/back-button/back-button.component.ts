import {
	Component, Input
} from '@angular/core';
import { RoutingService } from '../../services/routing.service';

@Component( {
	selector: 'app-back-button',
	templateUrl: './back-button.component.html',
	styleUrls: [ './back-button.component.scss' ]
} )
export class BackButtonComponent  {

	@Input() public  routeUrl: string;

	public constructor( public routingService: RoutingService ) { }

	public navigateBack(): void {

		this.routingService.navigateBack( this.routeUrl );

	}

}
