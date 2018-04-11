import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRouteModule} from './app.route';
import {DashboardComponent} from './dashboard/dashboard.component';
import { Router } from '@angular/router';
import {HeaderComponent} from './template/header/header.component';
import { ButtonComponent } from './common/button/button.component';
import { SharedModule } from './shared/shared.module';
import { BsDropdownModule, ModalModule, PaginationModule, TypeaheadModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    SharedModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
