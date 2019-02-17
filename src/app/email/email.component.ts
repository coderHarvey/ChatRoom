import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  error:any;

  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router:Router) {

    this.afAuth.authState.subscribe(auth => {
      if(auth){
        this.router.navigateByUrl('/members');
      }
    });
   }

   onSubmit(formData){
    if(formData.valid){
      console.log(formData.value);
      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email,formData.value.password)
      .then(
        (success)=>{
         this.router.navigate(['/login'])
     }).catch(
     (err)=> {this.error=err;}
     );
    }
  }

  ngOnInit() {
  }

}
