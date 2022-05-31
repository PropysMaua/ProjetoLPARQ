import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-app-user-list',
  templateUrl: './app-user-list.component.html',
  styleUrls: ['./app-user-list.component.css']
})
export class AppUserListComponent implements OnInit {
  users : User [] = [
    {
      id: "82499efd-4385-435e-a894-b8432b01be58",
      name: "Mauricio",
      nationality: "Brazilian",
      birthDate: "17/03/2005",
      gender: "M",
      city: "São Paulo",
      country: "Brazil",
      email: "mauricio@mauricio.com",
      phoneNumber: "+5511912345978",
      username: "mauricio",
      password: "Teste123!"
    }
  ]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = [...this.users, ...this.userService.getUsers()]
  }

  displayedColumns: string[] = ['id', 'name', 'nationality', 'birthDate', 'gender','city','country',
  'email', 'phoneNumber','username','password']
  dataSource = this.users

}
