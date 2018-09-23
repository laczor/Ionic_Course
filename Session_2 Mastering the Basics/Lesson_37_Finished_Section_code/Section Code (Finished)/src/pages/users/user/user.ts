import { Component, OnInit } from "@angular/core";

import { NavParams, NavController } from "ionic-angular"; 

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage implements OnInit {
  name: string;

  constructor(private navParams: NavParams,     //With this we can listen to the recieved parameters
              private navCtrl: NavController) {
  }

  ngOnInit() {
    this.name = this.navParams.get('userName');   //We get the recieved data from the navParams
  }

  onGoBack() {
    // this.navCtrl.pop();      //This will go back 1 layer
    this.navCtrl.popToRoot();   //This will go back to the rootLayer
  }
}
