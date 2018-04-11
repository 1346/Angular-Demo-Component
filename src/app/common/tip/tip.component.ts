import {Component, OnInit, HostListener, Input} from '@angular/core';

@Component({
  selector: 'hhl-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss']
})
export class TipComponent implements OnInit {
  public isShow: boolean;
  public contentClass: any = {};

  private _value: String;

  constructor() { }

  @Input( 'class' )
  set style( value ) {
    this._value = value;
    this.contentClass = value;
  }

  get style() {
    return this._value;
  }

  ngOnInit() {
    this.isShow = true;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isShow = false;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isShow = true;
  }

}
