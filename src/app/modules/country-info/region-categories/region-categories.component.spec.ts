import {
	ComponentFixture, TestBed
} from '@angular/core/testing';
import { RoutingService } from '../../shared/services/routing.service';
import { CountryListItemModel } from '../../shared/models/country-list-item.model';
import { CountryListItemComponent } from '../country-list/country-list-item/country-list-item.component';

describe( 'CountryListItemComponent', () => {

	let component: CountryListItemComponent;
	let fixture: ComponentFixture<CountryListItemComponent>;
	let routingServiceSpy: jasmine.SpyObj<RoutingService>;

	beforeEach( () => {

		const spy = jasmine.createSpyObj( 'RoutingService', [ 'navigateToCountryDetailsView' ] );

		TestBed.configureTestingModule( {
			declarations: [ CountryListItemComponent ],
			providers: [ {
				provide: RoutingService,
				useValue: spy
			} ]
		} )
			.compileComponents();

		routingServiceSpy = TestBed.inject( RoutingService ) as jasmine.SpyObj<RoutingService>;

	} );

	beforeEach( () => {

		fixture = TestBed.createComponent( CountryListItemComponent );
		component = fixture.componentInstance;
		component.country = {
			name: 'Test Country',
			flag: 'test-url'
		} as CountryListItemModel;
		component.region = 'Test Region';
		fixture.detectChanges();

	} );

	it( 'should create', () => {

		expect( component )
			.toBeTruthy();

	} );

	it( 'should navigate to country details view when the item is clicked', () => {

		const countryName = component.country.name;
		const regionName = component.region;
		const countryItem = fixture.nativeElement.querySelector( '.country-item' );

		countryItem.click();

		expect( routingServiceSpy.navigateToCountryDetailsView )
			.toHaveBeenCalledWith( regionName, countryName );

	} );

	it( 'should display the country name', () => {

		const countryName = component.country.name;
		const nameWrapper = fixture.nativeElement.querySelector( '.country-item__name-wrapper span' );

		expect( nameWrapper.textContent.trim() )
			.toEqual( countryName );

	} );

	it( 'should display the country flag if available', () => {

		component.country.flag = 'test-flag-url';
		fixture.detectChanges();
		const flagImage = fixture.nativeElement.querySelector( '.country-item__image-wrapper img' );

		expect( flagImage.getAttribute( 'src' ) )
			.toEqual( component.country.flag );

	} );

	it( 'should not display the country flag if not available', () => {

		component.country.flag = '';
		fixture.detectChanges();
		const flagImage = fixture.nativeElement.querySelector( '.country-item__image-wrapper img' );

		expect( flagImage )
			.toBeNull();

	} );

} );
