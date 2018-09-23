import { Component } from '@angular/core';

import { UsersPage } from "../users/users";
import { NavController } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usrPage = UsersPage;                  //We can store the reference for an other pages as a property

  constructor (private navCtrl: NavController) {}

  onGoToUsers() {
    this.navCtrl.push(this.usrPage)
      .catch((error) => console.log('Access denied, Argument was ' + error));
  }
}
