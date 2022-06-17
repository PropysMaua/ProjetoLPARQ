import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user.model";
import {FormControl, NgForm, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {UserService} from "../user.service";
import {Gender} from "../app-user-register/app-user-register.component";




@Component({
  selector: 'app-app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @Input()
  user: User

  genders: Gender[] = []
  models: any = {}
  startDate = new Date(1960, 0, 1)
  email = new FormControl('', [Validators.required, Validators.email])
  hide = true
  users$: Observable<User[]>

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.users$ = this.userService.getUsers()
    this.models = {
      gender: Gender
    }

    this.genders = [
      new Gender('M', 'Masculino'),
      new Gender('F', 'Feminino'),
      new Gender('ND', 'Não Declarar'),
    ]

    console.log("User that whats to update: " + this.user.name + " _ ", this.user.birthDate)

  }

  async onUpdateUser(form: NgForm){
    console.log("onUpdateUser:: " + form.value)
    console.log("Valid form: " + form.valid)
    if(form.valid) {
      let u = {...form.value}
      console.log("u: " + JSON.stringify(u))

      if (u.birthDate != "") {
        u.birthDate = new Date(u.birthDate).toLocaleDateString()
      }


      for (let key in u) {
        if (u[key] === "" || u[key] === null) {
          delete u[key]
        }
      }

      console.log("u parsed: " + JSON.stringify(u))
      console.log(`Try to update user ${this.user.id} with values: ${JSON.stringify(u)}`)
      const resp = await this.userService.updateUser(this.user.id, u)
      resp.subscribe(
        (data) => {
          alert("User updated: " + JSON.stringify(data))
        }
        )
    }
    // console.log(this.userService.getUsers())
    return true
  }


  getErrorMessage(){
    return this.email.hasError('email') ? 'Não é um email válido' : ''
  }
}
