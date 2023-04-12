import { Component } from '@angular/core';
import {
	ActivatedRoute, Router
} from '@angular/router';

@Component( {
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
	public constructor( public router: Router, public ar: ActivatedRoute ) {}

}
