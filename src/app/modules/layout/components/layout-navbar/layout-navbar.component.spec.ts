import {
	ComponentFixture, TestBed
} from '@angular/core/testing';

import { LayoutNavbarComponent } from './layout-navbar.component';

describe( 'NavbarComponent', () => {

	let component: LayoutNavbarComponent;
	let fixture: ComponentFixture<LayoutNavbarComponent>;

	beforeEach( async () => {

		await TestBed.configureTestingModule( { declarations: [ LayoutNavbarComponent ] } )
			.compileComponents();

	} );

	beforeEach( () => {

		fixture = TestBed.createComponent( LayoutNavbarComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();

	} );

	it( 'should create', () => {

		expect( component )
			.toBeTruthy();

	} );

} );
