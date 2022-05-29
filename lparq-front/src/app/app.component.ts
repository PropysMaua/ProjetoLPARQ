import { Component } from '@angular/core';
import { User } from './Users/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users: User[] = []
  onAddUser(user: User){
    this.users = [user, ...this.users]
  }
}
