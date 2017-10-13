import { Component, Input, OnInit } from '@angular/core';
import { MenuItem, MenuService } from "fw/service/menu.service";

@Component({
  selector: 'fw-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item = <MenuItem>null;
  isActiveRoute = false;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

}
