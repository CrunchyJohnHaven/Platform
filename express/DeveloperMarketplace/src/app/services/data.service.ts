import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from 'angularfire2';

@Injectable()
export class DataService {

  constructor() { }


  processAndStoreApplication( info ) {
    // will pass it to db, processing as necessary.
    info.forEach( item => console.log(item, info[item]) );
  }

}
