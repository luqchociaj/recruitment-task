import {
	ComponentFixture, TestBed
} from '@angular/core/testing';

import { AboutAuthorComponent } from './about-author.component';

import {
	ActivatedRoute, convertToParamMap
} from '@angular/router';
import {

	MatDialog, MatDialogRef
} from '@angular/material/dialog';

describe( 'AboutAuthorComponent', () => {

	let component: AboutAuthorComponent;
	let fixture: ComponentFixture<AboutAuthorComponent>;

	beforeEach( async () => {

		await TestBed.configureTestingModule( {
			declarations: [ AboutAuthorComponent ],
			providers: [ {
				provide: ActivatedRoute,
				useValue: { snapshot: { paramMap: convertToParamMap( { id: 123 } ) } }
			},
			{
				provide: MatDialogRef,
				useValue: {}
			},
			{
				provide: MatDialog,
				useValue: {}
			} ]
		} )
			.compileComponents();

		fixture = TestBed.createComponent( AboutAuthorComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();

	} );

	it( 'should create', () => {

		expect( component )
			.toBeTruthy();

	} );

} );
