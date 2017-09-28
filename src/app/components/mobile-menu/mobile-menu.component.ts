import {
  Component,
} from '@angular/core';
import {
  Subscription,
} from 'rxjs';

import { MobileService } from '../../services/mobile';

@Component({
  selector: 'mobile-menu',
  styles: [
    require('./mobile-menu.style.scss'),
  ],
  template: require('./mobile-menu.template.html'),
})

export class MobileMenuComponent {
  private isOpen: boolean = false;
  private sideNavSubscription: Subscription;
  private queryValue: string = '';

  constructor(private mobileService: MobileService) {
    this.sideNavSubscription = this.mobileService.activeSideNav$.subscribe(isOpen => this.isOpen = isOpen);
  }

  ngOnDestroy() {
    this.sideNavSubscription.unsubscribe();
  }

  handleFormSubmission() {

  }
}