import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	twitter() {
		window.open("https://twitter.com/__wh0am1__");
	}

	github() {
		window.open("https://github.com/wh0th3h3llam1");
	}

	medium() {
		window.open("https://medium.com/@wh0th3h3llam1");
	}
}
