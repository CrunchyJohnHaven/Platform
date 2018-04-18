// src/app/providers/af.ts
import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule, AngularFireAuthProvider, AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AF {

  constructor(public af: AngularFireModule) {}

  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  // loginWithGoogle() {
  //   return this.af.auth.login({
  //     provider: AuthProviders.Google,
  //     method: AuthMethods.Popup,
  //   });
  // }

  /**
   * Logs out the current user
   */
  // logout() {
  //   return this.af.auth.logout();
  // }
}
