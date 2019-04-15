import { Component, OnInit } from '@angular/core';
import { Config } from '../config';
@Component({
  selector: 'app-full-extent',
  templateUrl: './full-extent-demo.component.html',
  styleUrls: ['./full-extent-demo.component.css']
})
export class FullExtentDemoComponent implements OnInit {
  mapConfig: any;
  constructor() {
    this.mapConfig = Config.mapConfig;
  }
  ngOnInit() {}

}
