import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {HeaderComponent} from '../template/header/header.component';
import { BsDropdownModule, ModalModule, PaginationModule, TypeaheadModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TypeaheadModule.forRoot(),
  ],
  declarations: [DashboardComponent, HeaderComponent]
})
export class DashboardModule { }
