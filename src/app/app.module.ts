import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthService } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig ={
  apiKey: "AIzaSyDBs2IZIQtb16Xzd4D0d-hyLwVnTBkFJos",
    authDomain: "chatify-d90bf.firebaseapp.com",
    databaseURL: "https://chatify-d90bf.firebaseio.com",
    projectId: "chatify-d90bf",
    storageBucket: "chatify-d90bf.appspot.com",
    messagingSenderId: "951751377629"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routes

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
