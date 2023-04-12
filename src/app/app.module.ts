import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { LayoutModule } from './modules/layout/layout.module';
import {  HttpClientModule } from '@angular/common/http';

@NgModule( {
	declarations: [ AppComponent ],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		LayoutModule,
		SharedModule
	],
	providers: [ ],
	bootstrap: [ AppComponent ]
} )
export class AppModule { }
