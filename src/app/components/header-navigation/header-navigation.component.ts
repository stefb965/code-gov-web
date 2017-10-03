import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-navigation',
  styles: [require('./header-navigation.style.scss')],
  template: require('./header-navigation.template.html'),
  host: {
    '(window:scroll)': 'onScrollHandler($event)',
  },
})

export class HeaderNavigationComponent {
  searchQuery: string = '';
  isAtTop: boolean = true;

  constructor(public router: Router) {}

  /**
   * Whenever the form is submitted, perform a search and then reset the search
   * query.
   */
  handleFormSubmission() {
    this.search();
    this.resetSearchQuery();
  }

  /**
   * Reset the search query to a blank value.
   */
  resetSearchQuery() {
    this.searchQuery = '';
  }

  /**
   * Navigate to the search results page.
   *
   * @return {void}
   */
  search() {
    this.router.navigateByUrl('/search?q=' + this.searchQuery);
  }

  /**
   * Whether we are on an Policy Guide page.
   */
  isPolicyGuide() {
    return this.router.isActive('/policy-guide', false);
  }

  /**
   * Triggers whenever the window is scrolled.
   * 
   * @param $event - the scrolling event
   */
  onScrollHandler($event) {
    this.isAtTop = $event.target.scrollingElement.scrollTop === 0;
  }
}
