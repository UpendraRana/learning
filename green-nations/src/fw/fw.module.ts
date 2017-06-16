import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkBodyComponent } from "fw/framework-body/framework-body.component";
import { ContentComponent } from "fw/content/content.component";
import { TitleBarComponent } from "fw/title-bar/title-bar.component";
import { FrameworkConfigService } from "fw/service/framework-config.service";
import { TopBarComponent } from "fw/top-bar/top-bar.component";
import { StatusBarComponent } from "fw/status-bar/status-bar.component";
import { ScreenService } from "fw/service/screen.service";
import { ScreenLarge } from "fw/directives/screen-large.directive";
import { ScreenBelowLarge } from "fw/directives/screen-below-large.directive";
import { MenuService } from "fw/service/menu.service";
import { MenuComponent } from "fw/menus/menu/menu.component";



@NgModule({
  imports: [
    CommonModule
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
    MenuComponent
  ],

  exports: [FrameworkBodyComponent]
})
export class FwModule { }
