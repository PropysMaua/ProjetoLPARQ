import { User } from "./user.model";
import {UserRepoService} from "../repo/user-repo.service";
import {Component, Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  repo: UserRepoService
  loading: boolean = false


  constructor(repo: UserRepoService) {
    this.repo = repo
  }

  getUsers(): User[]{
    let u: any
    console.log("getUsers entrou: ")
      u = this.repo.getUsers()
        .subscribe(
          {
           next: (v) => {return v},
            error: (e) => alert(JSON.stringify(`Error: ${e}`)),
            complete: () => console.log('complete')
          }
        )
    console.log("getUsers saiu: " + typeof JSON.stringify(u)) //todo ARRUMAR ISSO AQUI
    return u
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

