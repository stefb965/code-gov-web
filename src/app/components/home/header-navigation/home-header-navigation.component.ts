import { Component } from '@angular/core';

@Component({
  selector: 'home-header-navigation',
  styles: [
    require('./home-header-navigation.style.scss'),
    require('../../header-navigation/header-navigation.style.scss'),
  ],
  template: require('./home-header-navigation.template.html'),
  host: {
    '(window:scroll)': 'onScrollHandler($event)',
  },
})

export class HomeHeaderNavigationComponent {
  private isAtTop: boolean = true;

  /**
   * Triggers whenever the window is scrolled.
   * 
   * @param $event - the scrolling event
   */
  onScrollHandler($event) {
    this.isAtTop = $event.target.scrollingElement.scrollTop === 0;
  }
}
