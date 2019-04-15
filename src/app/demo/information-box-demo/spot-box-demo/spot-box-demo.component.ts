import { Component, OnInit } from '@angular/core';
import { Config } from '../../config';
@Component({
  selector: 'app-spot-box-demo',
  templateUrl: './spot-box-demo.component.html',
  styleUrls: ['./spot-box-demo.component.css']
})
export class SpotBoxDemoComponent implements OnInit {
  mapConfig: any;
  informationConfig: any;
  constructor() {
    this.mapConfig = Config.mapConfig;
    this.informationConfig = this.defaultConfig;
  }
   // 默认图层参数
   private defaultConfig = {
    title: '苏A123456',
    titleStyle: {
      background: 'gainsboro',
      fontSize: '18px',
      color: '#000'
    },
    dataStyle: {
      fontSize: '16px',
      color: '#000'
    },
    data: [
      {
        name: '车牌号码：苏A123456',
      },
      {
        name: '车牌号码：苏A123456',
      },
      {
        name: '车牌号码：苏A123456',
      },
      {
        name: '车牌号码：苏A123456',
      },
      {
        name: '车牌号码：苏A123456',
      },
      {
        name: '车牌号码：苏A123456',
      }
    ]
  };
  ngOnInit() {
  }

}
