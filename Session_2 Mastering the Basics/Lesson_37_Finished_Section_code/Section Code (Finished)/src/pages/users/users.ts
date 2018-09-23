import { Component } from '@angular/core';

import { NavController } from "ionic-angular";

import { UserPage } from "./user/user";

@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  constructor (private navCtrl: NavController) {}

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, {userName: name});    //This is how we pass data to the next page
  }
//Navigation Guard
  ionViewCanEnter(): boolean | Promise<void> {
    console.log('ionViewCanEnter');
    const rnd = Math.random();
    return rnd > 0.1;
  }
//Everyhing is loaded which is required for the page
  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }
//We are about to enter the page
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }
//We entered the page
  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }
//We are about the leave the page
  ionViewCanLeave(): boolean | Promise<void> {
    console.log('ionViewCanLeave');
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    return promise;
  }
//We will leave the page right now!
  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }
//We left tje page
  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
//we will destroy the page
  ionViewWillUnload() {
    console.log('ionViewWillUnload');
  }
}
