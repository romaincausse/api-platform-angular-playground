import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];

  displayedColumns: string[] = ['id', 'username', 'email'];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.list().subscribe(
      response => this.users = response,
      error => console.log(error)
    )
  }

  create() {
    this.router.navigate(["user", -1])
  }

  update(id) {
    this.router.navigate(["user", id])
  }

}
