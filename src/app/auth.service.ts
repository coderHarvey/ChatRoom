import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, CanActivate } from '@angular/router';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/take';



@Injectable()
export class AuthService {

  constructor( private afAuth:AngularFireAuth, private router: Router) { }

  canActivate(): Observable<boolean>
  {
    return Observable.from(this.afAuth.authState).take(1).map(authState => !!authState).do(authenticated=>{
      if(!authenticated) 
      this.router.navigate(['/login']);
    });
  }


}
