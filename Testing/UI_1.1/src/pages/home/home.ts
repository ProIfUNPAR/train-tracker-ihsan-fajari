import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@IonicPage(
{
  name: 'HomePage'
}
)
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
