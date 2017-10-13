import { CommonModule } from '@angular/common';
import { ContentComponent } from "fw/content/content.component";
import { FrameworkBodyComponent } from "fw/framework-body/framework-body.component";
import { FrameworkConfigService } from "fw/service/framework-config.service";
import { MenuComponent } from "fw/menus/menu/menu.component";
import { MenuItemComponent } from "fw/menus/menu-item/menu-item.component";
import { MenuService } from "fw/service/menu.service";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ScreenBelowLarge } from "fw/directives/screen-below-large.directive";
import { ScreenLarge } from "fw/directives/screen-large.directive";
import { ScreenService } from "fw/service/screen.service";
import { StatusBarComponent } from "fw/status-bar/status-bar.component";
import { TitleBarComponent } from "fw/title-bar/title-bar.component";
import { TopBarComponent } from "fw/top-bar/top-bar.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge,
    MenuComponent,
    MenuItemComponent,

  ],

  exports: [FrameworkBodyComponent]
})
export class FwModule { }
