import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Advogado } from "../model/user.model";
import { Escritorio } from "../model/escritorio.model";
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  baseUrl = 'http://localhost:5000/api/'
  //baseUrl = 'http://157.230.14.32:5000/api/'
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

  getUser() : Observable<any>{
    return this.http.get<any>(this.baseUrl + 'Advogado/'+localStorage.getItem('UserId') );
  }

  saveEscritorio(Escritorio : Escritorio) : Observable<any>{
    return this.http.post<any>(this.baseUrl + 'Advogado', {Escritorio : Escritorio, AdvogadoId : localStorage.getItem('UserId') } );
  }
}
