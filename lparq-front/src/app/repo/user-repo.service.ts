import { Injectable } from '@angular/core';
import {NetworkService} from "../network.service";
import {User} from "../Users/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserRepoService {
  url = 'http://localhost:3000'

  constructor(private networkService: NetworkService) { }

  createUser(user: User) {
    let resp = this.networkService.postData(this.url + '/user', user)
    return resp
  }

  getUsers(): Observable<User[]> {
  return this.networkService.getData(this.url + '/user/getAll')
}
}
