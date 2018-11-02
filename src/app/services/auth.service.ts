import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User;

  loginSub: Subscription;

  constructor(private afAuth: AngularFireAuth, private fs: AngularFirestore, private router: Router) {
  }

  /**
   * Login using email id and password
   * @param email Email of the user
   * @param password Password of the user
   */
  async login(email:string, password: string) {

    try {

      const fUser = await this.afAuth.auth.signInWithEmailAndPassword(email, password);

      this.loginSub = this.fs.collection('users')
        .doc<User>(fUser.user.uid)
        .valueChanges().subscribe(
          (user) => {
            this.currentUser = user;

            this.router.navigate([""]);
          }
        )
      ;

    }

    catch(error) {

      throw error;

    }

  }

  /**
   * Logout the user
   */
  async logout() {

    await this.afAuth.auth.signOut();

    this.router.navigate(['login']);

    this.loginSub.unsubscribe();
  }
}
