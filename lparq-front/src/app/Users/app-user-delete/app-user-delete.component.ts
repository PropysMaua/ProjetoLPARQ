import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-app-user-delete',
  templateUrl: './app-user-delete.component.html',
  styleUrls: ['./app-user-delete.component.css']
})
export class AppUserDeleteComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  ondeleteUser(form: NgForm){
    if(form.valid) 
    this.userService.deleteUser(form.value.id)
  }

}
