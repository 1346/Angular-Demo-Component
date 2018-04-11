import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateComponent } from './template.component';
import { CommonModule } from '@angular/common';
import {TemplateRouteModule} from './template.route';
import {TplComponent} from './tpl/tpl.component';
import {SharedModule} from '../shared/shared.module';
import {TipModule} from '../common/tip/tip.module';

@NgModule( {
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TemplateRouteModule,
    SharedModule,
    TipModule
  ],
  declarations: [TemplateComponent, TplComponent],
} )
export class TemplateModule {
}
