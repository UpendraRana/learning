import { FrameworkConfigService, FrameworkConfigSettings } from "fw/service/framework-config.service";

import { Component } from '@angular/core';
import { MenuService } from "fw/service/menu.service";
import { initialMenuItems } from "app/app.menu";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private frameworkConfigService: FrameworkConfigService,
    private menuService: MenuService) {

    let config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com' },
        { imageFile: 'assets/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: false,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };
    frameworkConfigService.configure(config);
    menuService.items = initialMenuItems;   

  }
}
