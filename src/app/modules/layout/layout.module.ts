import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDashboardPageComponent } from './containers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import {
	LayoutNavbarComponent, NavbarLogoComponent
} from './components';

const CONTAINERS = [ LayoutDashboardPageComponent ];
const COMPONENTS = [ LayoutNavbarComponent, NavbarLogoComponent ];

@NgModule( {
	declarations: [ CONTAINERS, COMPONENTS ],
	exports: [ CONTAINERS, COMPONENTS ],
	imports: [
		AppRoutingModule,
		SharedModule,
		CommonModule,
		BrowserAnimationsModule,
		BrowserModule,
		FormsModule
	]
} )
export class LayoutModule { }
