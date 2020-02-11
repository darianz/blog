import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
displayName: string;
logged = false;
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) { }
    getDisplayName(){
      return this.displayName;
    }
    getLogged(){
      return this.logged;
    }
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
        console.log('You have been successfully logged in!');
        console.log(result.user.displayName);
        this.displayName = result.user.displayName;
        this.logged = true;
        // Need to navigate to Homepage
        //window.location.href = 'http://localhost:4200/';
       
    }).catch((error) => {
        console.log(error)
    })
  }

}