import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import {FormControl, Validators} from '@angular/forms';


interface Gender{
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-app-user-register',
  templateUrl: './app-user-register.component.html',
  styleUrls: ['./app-user-register.component.css']
})


export class AppUserRegisterComponent implements OnInit {

  genders: Gender[]=[
    {value: 'M', viewValue: 'Masculino'},
    {value: 'F', viewValue: 'Feminino'},
    {value: 'ND', viewValue: 'Não Declarar'}
  ]
  startDate = new Date(1960, 0, 1)
  email = new FormControl('', [Validators.required, Validators.email])
  hide = true

  @Input()
  users: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }


  onAddUser(form: NgForm){
    if(form.valid) return
    this.userService.addUser(
      form.value.id, form.value.name, form.value.nationality, form.value.birthDate, 
      form.value.gender, form.value.city, form.value.country, form.value.email, 
      form.value.phoneNumber, form.value.username, form.value.password 
    )
    console.log(this.users)
  }

  getErrorMessage(){
    if (this.email.hasError('required')){
      return 'Você deve inserir um email'
    }
    return this.email.hasError('email') ? 'Não é um email válido' : '' 
  }

}
