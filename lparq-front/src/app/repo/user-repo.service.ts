import { Injectable } from '@angular/core';
import {NetworkService} from "../network.service";
import {User} from "../Users/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserRepoService {
  url = 'http://localhost:3000'

  constructor(private networkService: NetworkService) { }

  async createUser(user: User) {
    let resp = await this.networkService.postData(this.url + '/user', user)
    return resp
  }
}
