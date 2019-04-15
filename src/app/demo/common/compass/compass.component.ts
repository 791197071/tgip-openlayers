import { Component, OnInit } from '@angular/core';
import { Config } from '../../config';
@Component({
  selector: 'app-compass',
  templateUrl: './compass.component.html',
  styleUrls: ['./compass.component.css']
})
export class CompassComponent implements OnInit {
  mapConfig: any;
  config: any;
  constructor() {
    this.mapConfig = Config.mapConfig;
    this.config = this.defaultConfig;
  }

  private defaultConfig = {
    visible: 'block',
    background: '#000',
    size: {
      width: '50px', // 总宽度
      height: '50px' // 总高度
    },
    position: {
      top: '',
      bottom: '10px',
      right: '10px',
      left: '' // 全局定位
    },
    image: {
      src: 'assets/compass.png'
    }
  };

  ngOnInit() {
  }

}
