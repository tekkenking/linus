import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'FeedsPage';
  tab2Root = 'SearchPage';
  tab3Root = 'TrendingPage';
  tab4Root = 'ProfilePage';

  constructor() {

  }
}
