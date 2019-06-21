import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthenticationService {

  //baseUrl = 'http://157.230.14.32:5000/api/'
  baseUrl = 'http://localhost:5000/api/'  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', { email: username, password: password });
  }
}
