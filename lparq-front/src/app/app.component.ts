import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lparq-front';
  users = new Array()
  onClientLogin(user: any) {
    this.users.push(user)
    console.log(this.users)
  }
}
