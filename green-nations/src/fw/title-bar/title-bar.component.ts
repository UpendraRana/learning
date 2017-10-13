import { Component, OnInit } from '@angular/core';

import { MenuService } from "fw/service/menu.service";
import { ScreenService } from "fw/service/screen.service";

@Component({
  selector: 'fw-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor(private screenService: ScreenService,
    private menuService: MenuService) { }

  ngOnInit() {
  }

}
