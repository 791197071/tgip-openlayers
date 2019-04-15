import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let HandsMap;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'layer123';
  config: any;
  map: any;
  ngOnInit() {
  }
}
