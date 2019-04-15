import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  confing: any;
  constructor(private router: Router) {
    this.confing = this.data;
  }

  private data = {
    list: [
      {
        title: '地图',
        href: '/map'
      },
      {
        title: '切换地图',
        href: '/switcher-map'
      },
      {
        title: '放大缩小',
        href: '/zoom-map'
      },
      {
        title: '全屏显示',
        href: '/full-screen'
      },
      {
        title: '全图显示',
        href: '/full-extent'
      },
      {
        title: '控制图层1',
        href: '/layer-control-pc1'
      },
      {
        title: '控制图层2',
        href: '/layer-control-pc2'
      },
      {
        title: '控制图层3',
        href: '/layer-control-pc3'
      },
      {
        title: '点图层',
        href: '/point-layer'
      },
      {
        title: '线图层',
        href: '/line-layer'
      },
      {
        title: '面层',
        href: '/polygon-layer'
      },
      {
        title: '指北针',
        href: '/compass'
      },
      {
        title: '热力图图例',
        href: '/heatmap-legend'
      },
      {
        title: '景区图例',
        href: '/scenic-legend'
      },
      {
        title: '景区信息框',
        href: '/scenic-box'
      },
      {
        title: '景点信息框',
        href: '/spot-box'
      }
    ]
  };

  ngOnInit() {}

  goTestDemo(url) {
    this.router.navigateByUrl(url);
  }
}
