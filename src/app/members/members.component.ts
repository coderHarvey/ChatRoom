import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {ChatItem} from '../ChatItem';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  name: any;
  state: string = '';
  items: FirebaseListObservable<any[]>;
  msgVal: String = '';
  item2:ChatItem;
  list:FirebaseListObservable<any[]>;


  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router: Router) {

    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
   
    this.items = afDB.list('/message');
    console.log(this.items);
    afAuth.auth.onAuthStateChanged((auth => {
      if (auth) {
        this.name = auth.email;
      }
    }));

  }


  logout() {
    this.afAuth.auth.signOut();
    console.log("logout complete");
    this.router.navigateByUrl('/email');
  }
  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage, name: this.name });
    console.log(name);
    this.msgVal = '';
  }

  ngOnInit() {

  }

}
