import { Component } from '@angular/core';
import {
	MatDialog, MatDialogRef
} from '@angular/material/dialog';
import { AboutAuthorDialogComponent } from '../about-author-dialog/about-author-dialog.component';

@Component( {
	selector: 'app-about-author',
	templateUrl: './about-author.component.html',
	styleUrls: [ './about-author.component.scss' ]
} )
export class AboutAuthorComponent {

	public constructor( public dialogRef: MatDialogRef<AboutAuthorComponent>, private dialog: MatDialog ) { }

	public openAboutDialog() {

		this.dialog.open( AboutAuthorDialogComponent, {
			width: '300px',
			height: '300px'
		} );

	}
}
