import {
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { MobileService } from '../../services/mobile';

@Component({
  selector: 'mobile-menu-button',
  styles: [
    require('./mobile-menu-button.style.scss'),
  ],
  template: require('./mobile-menu-button.template.html'),
  encapsulation: ViewEncapsulation.None,
})

export class MobileMenuButtonComponent {
  constructor(private mobileService: MobileService) {}

  toggleSideNav() {
    this.mobileService.toggleSideNav();
  }
}