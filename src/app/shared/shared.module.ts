import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElModule } from 'element-angular/release/element-angular.module';

@NgModule({
  imports: [
    CommonModule,
    ElModule.forRoot()
  ],
  exports: [
    ElModule
  ],
  declarations: []
})
export class SharedModule { }
