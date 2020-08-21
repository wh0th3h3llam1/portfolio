import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'portfolio';

	constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer)
	{
		// For Custom mat-icon
		// Usage : <mat-icon svgIcon="name"></mat-icon>
		this.matIconRegistry.addSvgIcon(
			"github",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svg/github.svg")
		);

		this.matIconRegistry.addSvgIcon(
			"twitter",
			this.domSanitizer.bypassSecurityTrustResourceUrl("assets/svg/twitter.svg")
		);
	}

}
