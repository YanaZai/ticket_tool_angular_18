import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ILogin } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = 'https://freeapi.miniprojectideas.com/api/';
  constructor(private http: HttpClient) {}

  login(loginData: ILogin): Observable<any> {
    return this.http.post(this.apiUrl + 'Tickets/Login', {})
  }
}
