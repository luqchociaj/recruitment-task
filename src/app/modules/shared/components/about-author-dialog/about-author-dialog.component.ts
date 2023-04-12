import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component( {
	selector: 'app-about-author-dialog',
	templateUrl: './about-author-dialog.component.html',
	styleUrls: [ './about-author-dialog.component.scss' ]
} )
export class AboutAuthorDialogComponent {

	public constructor( public dialogRef: MatDialogRef<AboutAuthorDialogComponent>
	) { }

	public closeDialog(): void {

		this.dialogRef.close();

	}

}
