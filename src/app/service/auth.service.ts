import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthenticationService {

  private baseUrl = 'http://localhost:8080/GitProc/api/';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {

    console.log("teste")
    return this.http.post<any>(this.baseUrl + 'login', { username: username, password: password })
      .pipe(map(res => {
        res.json().results.map(x => {
            return x;
        })
      }));
  }
}
