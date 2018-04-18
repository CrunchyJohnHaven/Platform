import { Injectable } from '@angular/core';

import { Router } from '@angular/router';


import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class DataService {

  private fireDocRecord: AngularFirestoreDocument<any>;


  constructor( private afs: AngularFirestore ) {  }



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
