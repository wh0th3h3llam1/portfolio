import { Component, OnInit, Input } from '@angular/core';
import { MatChip, MatChipInput } from '@angular/material/chips';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	// @Input() selectable: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

}
