import { User } from "./user.model";
import {UserRepoService} from "../repo/user-repo.service";
import {Component, Injectable} from "@angular/core";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  repo: UserRepoService
  loading: boolean = false

  constructor(repo: UserRepoService) {
    this.repo = repo
  }

  getUsers(): Observable<User[]>{
    return this.repo.getUsers()
  }

  addUser(user: User) {
    console.log("Criar user: " + user)
    // const user: User = {
    //     id, name, nationality, birthDate, gender, city, country, email, phoneNumber, username, password
    // }
    this.repo.createUser(user)
      .subscribe(
        {
          next: (v) => alert("User created!"),
          error: (e) => alert(JSON.stringify(`
                Error code: ${e.status}
                Error message: ${e.error}`.replace(/\n/g, ''))),
          complete: () => console.log('complete')
        })
  }

  deleteUser(userId: string): Observable<any> {
    return this.repo.deleteUser(userId)
  }

  updateUser(userId: string, attributesToUpdate: object): Observable<any> {
    return this.repo.updateUser(userId, attributesToUpdate)
  }

}

    //
    //       // rotar para home
    //     },
    //       err => {
    //         console.log("Error received")
    //         alert(JSON.stringify(`
    //           Error code: ${err.status}
    //           Error message: ${err.error}
    //         `.replace(/\n/g, '')))
    //       })
    //
    // }

