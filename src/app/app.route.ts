import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'template',
    loadChildren: './template/template.module#TemplateModule'
  },
];

@NgModule( {
  imports: [ RouterModule.forRoot( routes, {
    preloadingStrategy: PreloadAllModules
  } ) ],
  exports: [ RouterModule ]
} )
export class AppRouteModule {
}
