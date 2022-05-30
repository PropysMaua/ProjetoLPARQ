import { User } from "./user.model";
import {UserRepoService} from "../repo/user-repo.service";
import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class UserService{
  repo: UserRepoService


    constructor(repo: UserRepoService) {
      this.repo = repo
    }

    // getUsers(): User[]{
    //     return [...this.Users]
    // }

    async addUser(user: User) {
      console.log("Criar user: " +  user)
        // const user: User = {
        //     id, name, nationality, birthDate, gender, city, country, email, phoneNumber, username, password
        // }
      let resp = await this.repo.createUser(user)
      console.log("resp: " + JSON.stringify(resp))
    }


}
