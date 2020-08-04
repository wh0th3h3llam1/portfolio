import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

/* For Custom Icons, REST API, Interceptor */
import { HttpClientModule } from "@angular/common/http";

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

/* Material Import */
import { MaterialModule } from "./material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

/* Directives */
import { MaterialElevationDirective } from "./material/material-elevation.directive";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
	declarations: [
		AppComponent,

		NavbarComponent,
		FooterComponent,
		routingComponents,

		/* Directives */
		MaterialElevationDirective,

		HomeComponent,
		AboutComponent,


		ScrollToTopComponent,
	],
	imports: [
		BrowserAnimationsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		BrowserModule,
		FormsModule,

		HttpClientModule,

		/* Material Import */
		MaterialModule,
		FlexLayoutModule
	],
	providers: [ Title ],
	bootstrap: [AppComponent]
})
export class AppModule { }
