import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { DataTableModule } from 'angular2-datatable';
import { NgbRootModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Custom routing module
import { RoutingModule } from './routing';
import { MainComponent } from './main/main.component';
import { ControllerComponent } from './controller/controller.component';
import { DevicesComponent } from './devices/devices.component';
import { CasesComponent } from './cases/cases.component';
import { SettingsComponent } from './settings/settings.component';

import { DevicesModalComponent } from './devices/devices.modal.component';
import { SettingsUserModalComponent } from './settings/settings.user.modal.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RoutingModule,
		NgbRootModule,
		NgxDatatableModule,
	],
	declarations: [
		//Main component
		MainComponent,
		//Router module components
		ControllerComponent,
		DevicesComponent,
		CasesComponent,
		SettingsComponent,
		//Modals
		DevicesModalComponent,
		SettingsUserModalComponent,
	],
	entryComponents: [
		DevicesModalComponent,
		SettingsUserModalComponent,
	],
	bootstrap: [MainComponent]
})
export class MainModule {}