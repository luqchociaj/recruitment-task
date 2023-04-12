import {
	ComponentFixture, TestBed
} from '@angular/core/testing';

import { LayoutDashboardPageComponent } from './layout-dashboard-page.component';

describe( 'DashboardComponent', () => {

	let component: LayoutDashboardPageComponent;
	let fixture: ComponentFixture<LayoutDashboardPageComponent>;

	beforeEach( async () => {

		await TestBed.configureTestingModule( { declarations: [ LayoutDashboardPageComponent ] } )
			.compileComponents();

	} );

	beforeEach( () => {

		fixture = TestBed.createComponent( LayoutDashboardPageComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();

	} );

	it( 'should create', () => {

		expect( component )
			.toBeTruthy();

	} );

} );
