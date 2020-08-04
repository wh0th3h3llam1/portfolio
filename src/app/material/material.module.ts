import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; 
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatSortModule } from '@angular/material/sort'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const MaterialComponents = [
	MatBadgeModule,
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatDividerModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatMenuModule,
	MatPaginatorModule,
	MatProgressBarModule,
	MatSlideToggleModule,
	MatSelectModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatToolbarModule,
	MatTooltipModule,
];

@NgModule({
	imports: [ MaterialComponents ],
	exports : [ MaterialComponents ]
})
export class MaterialModule { }
