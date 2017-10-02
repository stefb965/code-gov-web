import {
  Component,
} from '@angular/core';
import {
  Router,
} from '@angular/router';
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
  private searchQuery: string = '';

  constructor(
    private mobileService: MobileService,
    private router: Router,
  ) {
    this.sideNavSubscription = this.mobileService.activeSideNav$.subscribe(isOpen => this.isOpen = isOpen);
  }

  ngOnDestroy() {
    this.sideNavSubscription.unsubscribe();
  }

  /**
   * Navigate to the search results page.
   *
   * @return {void}
   */
  search() {
    this.router.navigateByUrl('/search?q=' + this.searchQuery);
  }
}