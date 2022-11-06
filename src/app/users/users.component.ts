import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  buttonAge!: string;
  hidden: boolean = true;
  user: User = {
    id: 1,
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };
  constructor() {}

  ngOnInit(): void {
    this.buttonAge = 'Cacher !';
  }

  hideAge() {
    return this.hidden === true
      ? (this.buttonAge = 'Afficher !') && (this.hidden = false)
      : (this.buttonAge = 'Cacher !') && (this.hidden = true);
  }
}
