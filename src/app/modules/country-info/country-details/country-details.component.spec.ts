import {
	ComponentFixture, TestBed
} from '@angular/core/testing';

import { CountryDetailsComponent } from './country-details.component';
import { HttpClientModule } from '@angular/common/http';
import {
	ActivatedRoute, convertToParamMap
} from '@angular/router';
import { of } from 'rxjs';

describe( 'CountryDetailsComponent', () => {

	let component: CountryDetailsComponent;
	let fixture: ComponentFixture<CountryDetailsComponent>;

	beforeEach( async () => {

		await TestBed.configureTestingModule( {
			declarations: [ CountryDetailsComponent ],
			imports: [ HttpClientModule ],
			providers: [ {
				provide: ActivatedRoute,
				useValue: { paramMap: of( convertToParamMap( {} ) ) }
			} ]
		} )
			.compileComponents();
		fixture = TestBed.createComponent( CountryDetailsComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();

	} );

	it( 'should create', () => {

		expect( component )
			.toBeTruthy();

	} );

} );
