import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	twitter() {
		location.href = "https://twitter.com/__wh0am1__";
	}

	github() {
		location.href = "https://github.com/wh0th3h3llam1";
	}

	medium() {
		location.href = "https://medium.com/@wh0th3h3llam1";
	}
	
	mail() {
		location.href = "mailto:wh0am1.7548@gmail.com?subject='Hello'";
	}

	protonmail() {
		location.href = "mailto:wh0th3h3llam1@pm.me?subject='Hello'";
	}

	changeColor() {
		// color: #1da1f2;
	}
}
