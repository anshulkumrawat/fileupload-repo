import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { _throw } from 'rxjs/observable/throw';
import {  HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class FileUploadService {

  baseURL = "http://localhost:4000/api";
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Get Users
  getUsers() {
    return this.http.get(this.baseURL)
  }

  // Create User
  addUser(name: string, profileImage: File): Observable<any> {
    var formData: any = new FormData();
    formData.append("name", name);
    formData.append("avatar", profileImage);

    return this.http.post<User>(`${this.baseURL}/create-user`, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return _throw(errorMessage);
  }

}
