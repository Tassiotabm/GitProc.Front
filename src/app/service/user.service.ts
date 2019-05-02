import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Advogado } from "../model/user.model";
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  baseUrl = 'http://157.230.14.32:5000/api/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) { }

  createUser(Advogado : Advogado) : Observable<any>{
    return this.http.post<any>(this.baseUrl + 'Login/CreateUser', Advogado);
  }

  getUser(userId : string) : Observable<any>{
    return this.http.get<any>(this.baseUrl + 'Advogado?userid='+userId);
  }
}
