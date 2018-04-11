import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TipComponent} from './tip.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ TipComponent ],
  exports: [ TipComponent ],
  entryComponents: [ TipComponent ]
})
export class TipModule { }
