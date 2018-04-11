import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tpl',
  templateUrl: './tpl.component.html',
  styleUrls: ['./tpl.component.scss']
})
export class TplComponent implements OnInit {
  public tableData: any;

  constructor() {}

  ngOnInit() {
    this.tableData = [{
      name: '水爷',
      date: '2017-08-19',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      name: '水爷',
      date: '2017-08-20',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      name: '水爷',
      date: '2017-08-21',
      address: '上海市普陀区金沙江路 1518 弄',
    }, {
      name: '水爷',
      date: '2017-08-22',
      address: '<span style="color: red">上海市普陀区金沙江路 1518 弄</span>',
    }];
  }
  handle(scope) {
    console.log(scope.index);
    console.log(scope.rowData.name);
    console.log(scope.rowData.date);
    console.log(scope.rowData.address);
    // scope.destroy();
  }

}
