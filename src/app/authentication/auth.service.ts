import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isUserLogged: boolean = true;

  register(registerForm: any) {
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      registerForm.email,
      registerForm.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  login(loginForm: any) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.isUserLogged = false;
        // this.userTest = user;
        // ...
      })
      .catch((error) => {
        alert('Wrong account or password.');
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}
