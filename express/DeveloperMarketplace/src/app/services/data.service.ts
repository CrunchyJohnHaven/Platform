import { Injectable } from '@angular/core';
// import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';



@Injectable()
export class DataService {

  constructor() { }


  processAndStoreApplication( info, callback ) {
    // will pass it to db, processing as necessary.
    const dat = JSON.stringify(info);
    console.log(dat);
    let n = 500;
    while (n > 0) {
      console.log(n);
      --n;
    }
    return callback(dat);
  }

}



// import {Injectable} from "@angular/core";
// import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

// @Injectable()
// export class AF {

//   constructor(public af: AngularFire) {}

//   /**
//    * Logs in the user
//    * @returns {firebase.Promise<FirebaseAuthState>}
//    */
//   loginWithGoogle() {
//     return this.af.auth.login({
//       provider: AuthProviders.Google,
//       method: AuthMethods.Popup,
//     });
//   }

//   /**
//    * Logs out the current user
//    */
//   logout() {
//     return this.af.auth.logout();
//   }
// }
