import { Injectable } from '@angular/core';

import {User} from "../Users/user.model";
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserRepoService {
  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<any> {
    return this.http.post<any>(this.url + '/user', user)
  }

  getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.url + '/user/getAll')
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(this.url + '/user?id=' + id)
  }
}
