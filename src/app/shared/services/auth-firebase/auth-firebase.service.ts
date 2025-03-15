import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Login } from '../../types/Login';
import { removeUserData } from '../../../utils/localStorage';


@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string): Promise<Login | null> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          const loginUser: Login = {
            accessToken: user.refreshToken,
            user: {
              id: user.uid,
              email: user.email || "",
            }
          };
          return loginUser;
        }
        return null
      });
  }

  register(nome: string, email: string, password: string): Promise<Login | null> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          user.updateProfile({
            displayName: nome,
          })
          const loginUser: Login = {
            accessToken: user.refreshToken,
            user: {
              id: user.uid,
              email: user.email || "",
            }
          };
          return loginUser;
        }
        return null
      });
  }

  logout(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      removeUserData();
      this.router.navigate(['/sign-in']);
    });
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }
}
