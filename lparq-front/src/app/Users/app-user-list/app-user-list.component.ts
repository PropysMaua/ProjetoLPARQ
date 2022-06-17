import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {UpdateUserComponent} from "../app-update-user/update-user.component";

@Component({
  selector: 'app-app-user-list',
  templateUrl: './app-user-list.component.html',
  styleUrls: ['./app-user-list.component.css']
})
export class AppUserListComponent implements OnInit {
  users$: Observable<User[]>

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.users$ = this.userService.getUsers()
  }

  displayedColumns: string[] = ['id', 'name', 'nationality', 'birthDate', 'gender','city','country',
  'email', 'phoneNumber','username','password', 'delete', 'update']

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

  updateUser(id: string, attributesToUpdate: object) {

  }

  updateUserDialog(user: User) {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      width: '1000px',
      data: user,
    })
    dialogRef.componentInstance.user = user
  }


  refreshUsers() {
    this.users$ = this.userService.getUsers()
  }
}

