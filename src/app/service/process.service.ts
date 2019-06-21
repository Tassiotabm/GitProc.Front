import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Advogado } from "../model/user.model";
import { Observable } from 'rxjs';

@Injectable()
export class ProcessService {

  baseUrl = 'http://localhost:5000/api/'
  //baseUrl = 'http://157.230.14.32:5000/api/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Authorization': 'my-auth-token'
    })
  };
  constructor(private http: HttpClient) { }

  createProcess(processId: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Processo/', 
      { IdProcesso: processId, UserId: localStorage.getItem('UserId') });
  }

  getProcess(userId: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'Processo/' +userId);
  }

  getProcessEscritorio(userId:string ):  Observable<any> {
    return this.http.get<any>(this.baseUrl + 'Processo/ByEscritorio/' + userId);
  }

  getProcessMasterData(processId:string ):  Observable<any> {
    return this.http.get<any>(this.baseUrl + 'ProcessoMaster/' + processId);
  }
}
