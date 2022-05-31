import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import {Observable} from "rxjs";

@Component({
  selector: 'app-app-user-list',
  templateUrl: './app-user-list.component.html',
  styleUrls: ['./app-user-list.component.css']
})
export class AppUserListComponent implements OnInit {
  users$: Observable<User[]>
  helper$: Observable<any>

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers()
  }

  displayedColumns: string[] = ['id', 'name', 'nationality', 'birthDate', 'gender','city','country',
  'email', 'phoneNumber','username','password', 'delete']

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(
      {
        next: (v) => alert("User Deleted!"),
        error: (e) => alert(JSON.stringify(`
                Error code: ${e.status}
                Error message: ${e.error}`.replace(/\n/g, ''))),
        complete: () => console.log('complete')
      }
    )
  }


  refreshUsers() {
    this.users$ = this.userService.getUsers()
  }
}
