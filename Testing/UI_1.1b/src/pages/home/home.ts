import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import { EtaPage } from '../eta/eta';
import {MapsPage} from '../maps/maps';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
//@Injectable()
export class HomePage {

  //public roll: FR;
  storage : Storage;
  searchQuery: string = '';
    items: string[];


    // constructor() {
    //   this.initializeItems();
    // }
    constructor(private storage: Storage,public alertCtrl: AlertController, public navCtrl: NavController) {
      this.initializeItems();
      this.storage = storage;


      //this.roll = new FR ("test");
    }
    ionViewDidLoad(){
      this.storage.set('destination','Cimahi');
      this.storage.get('destination').then((val) => {
        console.log('Your destination is ', val);
      });

    }

    //
    // this.selectOptions = {
    //   title: 'Pizza Toppings',
    //   subTitle: 'Select your toppings',
    //   mode: 'md'
    // };

/*  //FOR SEARCHBAR */

    initializeItems() {
      this.items = [
        'Amsterdam',
        'Bogota',
        'Cimahi',
        'Depok',
        'Tasikmalaya'
      ];
    }

/* // I DON'T KNOW WHAT IS THIS FOR
    getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the searchbar
      let val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
    */

    presentAlert(event,dest) {
      let confirmation = this.alertCtrl.create({
        title: 'Confirmation',
        subTitle: 'Are you sure with this train and the location?' ,
        buttons: [{
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.push(MapsPage, { dest: dest});
          }
        }]
      });
      confirmation.present();
    }

/*
  constructor(public navCtrl: NavController) {

  }
*/
}
