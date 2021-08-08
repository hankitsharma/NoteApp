import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {  }

  authenticateUser(data) {
    return this.httpClient.post('http://localhost:3000/auth/v1/', data);
  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  isUserAuthenticated(token): Promise<boolean> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.post('http://localhost:3000/auth/v1/isAuthenticated', {}, {
      headers : headers
    }).pipe(map((res) => res['isAuthenticated'])).toPromise();
  }
}
