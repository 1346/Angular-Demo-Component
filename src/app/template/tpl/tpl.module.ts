import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TplComponent} from './tpl.component';
import {SharedModule} from '../../shared/shared.module';
import {TipModule} from '../../common/tip/tip.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TipModule
  ],
  declarations: [ TplComponent ]
})
export class TplModule { }
