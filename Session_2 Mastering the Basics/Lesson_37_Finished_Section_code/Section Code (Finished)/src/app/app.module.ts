import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from "../pages/users/users";
import { UserPage } from "../pages/users/user/user";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)            //This will tell ionic which is the base file, where the whole application will start
  ],
  bootstrap: [IonicApp],                  //Will contain the IonicApp object with all of it's features functions
  entryComponents: [                      //These are the created pages for different "routes"
    MyApp,
    HomePage,
    UsersPage,
    UserPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
