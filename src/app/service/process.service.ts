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

  createProcessMaster(processId: string,nick: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'Processo/', 
      { IdProcesso: processId, UserId: localStorage.getItem('UserId'), nick: nick });
  }

  createProcess(processData: any,fileToUpload: File,comentario: string, nick: string): Observable<any> {
    let formData = new FormData();
    if(fileToUpload)
      formData.append('file', fileToUpload, fileToUpload.name);
    Object.keys(processData).forEach(key => formData.append(key, processData[key]));
    formData.append('comentario', comentario);
    formData.append('nick', nick);
    return this.http.post<any>(this.baseUrl + 'Processo/Add',formData );
  }

  getProcessAdvogado(userId: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'Processo/' +userId);
  }

  getAllComments(processId: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'Processo/Comentarios/' + processId);
  }

  getAllProcess(processMasterId: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'Processo/AllProcessos/' +processMasterId);
  }

  getProcessEscritorio(userId:string ):  Observable<any> {
    return this.http.get<any>(this.baseUrl + 'Processo/ByEscritorio/' + userId);
  }

  getProcessMasterData(processId:string ):  Observable<any> {
    return this.http.get<any>(this.baseUrl + 'ProcessoMaster/' + processId);
  }

  getMovimentos(processMasterId: string):  Observable<any> {
    return this.http.get<any>(this.baseUrl + 'Processo/Movimentos/' + processMasterId);
  }
}
