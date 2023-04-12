import {
	ComponentFixture, TestBed
} from '@angular/core/testing';

import { AboutAuthorDialogComponent } from './about-author-dialog.component';
import {
	MatDialogModule, MatDialogRef
} from '@angular/material/dialog';

describe( 'AboutAuthorDialogComponent', () => {

	let component: AboutAuthorDialogComponent;
	let fixture: ComponentFixture<AboutAuthorDialogComponent>;

	beforeEach( async () => {

		await TestBed.configureTestingModule( {
			declarations: [ AboutAuthorDialogComponent ],
			imports: [ MatDialogModule ],
			providers: [ {
				provide: MatDialogRef,
				useValue: {}
			} ]
		} )
			.compileComponents();

	} );
	beforeEach( () => {

		fixture = TestBed.createComponent( AboutAuthorDialogComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();

	} );

	it( 'should create', () => {

		expect( component )
			.toBeTruthy();

	} );

} );
