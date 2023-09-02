import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from '../type/users.type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BaseURL = 'https://api.escuelajs.co';

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<IUsers[]>(this.BaseURL + '/api/v1/users');
  }
}
