import { Injectable } from '@angular/core';
import { Login } from '../types/Login';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LOGIN_URL = `${environment.apiUrl}/login`;
  REGISTER_URL = `${environment.apiUrl}/register`;

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<Login> {
    const data = {
      email: email,
      password: password
    }
    return this.httpClient.post<Login>(`${this.LOGIN_URL}`, data);
  }
}
