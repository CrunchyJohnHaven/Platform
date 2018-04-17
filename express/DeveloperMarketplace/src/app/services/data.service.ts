import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
// import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2/firestore';



@Injectable()
export class DataService {

  constructor( private angularFirestore: AngularFirestore ) { }


  processAndStoreApplication( info ) {
    // will pass it to db, processing as necessary.

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
