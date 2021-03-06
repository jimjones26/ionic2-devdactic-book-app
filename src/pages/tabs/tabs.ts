import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from './../contact/contact';
import { LearnPage } from './../learn/learn';
import { ReadPage } from './../read/read';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public tab1Root: any = ReadPage;
  public tab2Root: any = LearnPage;
  public tab3Root: any = ContactPage;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TabsPage Page');
  }

}
