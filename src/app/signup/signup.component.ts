import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  state: string ="";
  error:any;

  constructor(public afDB: AngularFireDatabase, public afAuth: AngularFireAuth, public router:Router) {

    // this.afAuth.authState.subscribe(auth => {
    //   if(auth){
    //     this.router.navigateByUrl('/members');
    //   }
    // });
   }

   onSubmit(formData){
     if(formData.valid){
       console.log(formData.value);
       this.afAuth.auth.createUserWithEmailAndPassword(formData.value.email,formData.value.password)
       .then(
         (success)=>{
          this.router.navigate(['/members'])
      }).catch(
      (err)=> {this.error=err;}
      );
     }
   }
  ngOnInit() {
  }

}
