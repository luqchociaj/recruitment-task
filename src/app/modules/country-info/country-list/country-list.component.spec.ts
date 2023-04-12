import {
	ComponentFixture, TestBed
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import {
	of, throwError
} from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { RoutingService } from '../../shared/services/routing.service';
import { CountryListComponent } from './country-list.component';

describe( 'CountryListComponent', () => {

	let component: CountryListComponent;
	let fixture: ComponentFixture<CountryListComponent>;
	let apiServiceSpy: jasmine.SpyObj<ApiService>;
	let routingServiceSpy: jasmine.SpyObj<RoutingService>;

	beforeEach( () => {

		const apiService = jasmine.createSpyObj( 'ApiService', [ 'getRegionCountriesApiCall' ] );
		const routingService = jasmine.createSpyObj( 'RoutingService', [ 'navigateToRegionList' ] );
		const activatedRoute = { paramMap: of( { get: () => 'Europe' } ) };

		TestBed.configureTestingModule( {
			declarations: [ CountryListComponent ],
			providers: [ {
				provide: ApiService,
				useValue: apiService
			},
			{
				provide: RoutingService,
				useValue: routingService
			},
			{
				provide: ActivatedRoute,
				useValue: activatedRoute
			} ]
		} )
			.compileComponents();

		fixture = TestBed.createComponent( CountryListComponent );
		component = fixture.componentInstance;
		apiServiceSpy = TestBed.inject( ApiService ) as jasmine.SpyObj<ApiService>;
		routingServiceSpy = TestBed.inject( RoutingService ) as jasmine.SpyObj<RoutingService>;

	} );

	it( 'should create', () => {

		expect( component )
			.toBeTruthy();

	} );

	it( 'should call loadCountryList on init', () => {

		spyOn( component, 'loadCountryList' );
		component.ngOnInit();
		expect( component.loadCountryList )
			.toHaveBeenCalled();

	} );

	it( 'should set selectedRegionName to the value of the region parameter in the URL', () => {

		const regionName = 'Europe';

		apiServiceSpy.getRegionCountriesApiCall.and.returnValue( of( [] ) );
		component.loadCountryList();
		expect( component.selectedRegionName )
			.toEqual( regionName );

	} );

} );
