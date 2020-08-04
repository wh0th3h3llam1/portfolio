import { Component, OnInit, HostListener } from '@angular/core';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';

/** Custom options the configure the tooltip's default show/hide delays. */
export const ToolTipOptions: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 100,
  touchendHideDelay: 1000,
};

@Component({
	selector: 'scroll-to-top',
	templateUrl: './scroll-to-top.component.html',
	styleUrls: ['./scroll-to-top.component.css'],
	providers: [
		{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: ToolTipOptions}
	],
})

export class ScrollToTopComponent implements OnInit {

	windowScrolled: boolean;
	showDelay: number = 1000;
	constructor(){}

	@HostListener("window:scroll", [])
	onWindowScroll() {
		if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
			this.windowScrolled = true;
		}
		else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
			this.windowScrolled = false;
		}
	}

	scrollToTop() {
		(function smoothscroll() {

			var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

			if (currentScroll > 0) {
				window.requestAnimationFrame(smoothscroll);
				window.scrollTo(0, currentScroll - (currentScroll / 8));
			}

		})();
	}

	ngOnInit() {
	}

}
