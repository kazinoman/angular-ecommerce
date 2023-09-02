import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { IUsers } from '../type/users.type';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  userList: IUsers[];
  isLoading: boolean = true;
  isError: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAllUsers().subscribe((users: IUsers[]) => {
      if (users) {
        this.userList = users;
        this.isLoading = false;
      } else {
        this.isError = true;
      }
    });
  }
}
