import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from './modules/shared/shared.module';

describe( 'AppComponent', () => {

	beforeEach( async () => {

		await TestBed.configureTestingModule( {
			imports: [ RouterTestingModule,
				LayoutModule,
				SharedModule ],
			declarations: [ AppComponent ]
		} )
			.compileComponents();

	} );

	it( 'should create the app', () => {

		const fixture = TestBed.createComponent( AppComponent );
		const app = fixture.componentInstance;

		expect( app )
			.toBeTruthy();

	} );

} );
