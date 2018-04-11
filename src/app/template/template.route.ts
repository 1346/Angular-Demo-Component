import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {TplComponent} from './tpl/tpl.component';

const routes: Routes = [
  {
    path: 'tpl',
    component: TplComponent
  }
];

@NgModule( {
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [ RouterModule ]
} )
export class TemplateRouteModule {

}
