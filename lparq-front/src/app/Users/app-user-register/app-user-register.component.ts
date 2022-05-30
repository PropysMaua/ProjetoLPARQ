import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import {FormControl, Validators} from '@angular/forms';


class Gender{
  value: string
  viewValue: string
  constructor(value: string, viewValue: string) {
    this.value = value
    this.viewValue = viewValue
  }
}

@Component({
  selector: 'app-app-user-register',
  templateUrl: './app-user-register.component.html',
  styleUrls: ['./app-user-register.component.css']
})
export class AppUserRegisterComponent implements OnInit {

  genders: Gender[] = []
  models: any = {}
  startDate = new Date(1960, 0, 1)
  email = new FormControl('', [Validators.required, Validators.email])
  hide = true
  users: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // this.users = this.userService.getUsers()
    this.models = {
        gender: Gender
      }

    this.genders = [
      new Gender('M', 'Masculino'),
      new Gender('F', 'Feminino'),
      new Gender('ND', 'Não Declarar'),
    ]

    console.log("Users: ")
    this.getUsers().forEach(value => console.log(value))
  }


  async onAddUser(form: NgForm){
    console.log("onAddUser: " + form.value)
    if(form.valid) {
      let u: User = {...form.value}
      await this.userService.addUser(u)
    }
    // console.log(this.userService.getUsers())
    return true
  }

  getUsers(){
    let u: any[] = []
    this.userService.getUsers().forEach(
      value => {
        u.push(value)
      }
    )
    return u
  }

  getErrorMessage(){
    if (this.email.hasError('required')){
      return 'Você deve inserir um email'
    }
    return this.email.hasError('email') ? 'Não é um email válido' : ''
  }

}
