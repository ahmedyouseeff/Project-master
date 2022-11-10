import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/services/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private as: AuthService, private us: UserService) {}

  isOpen: boolean = false;
  isUser: boolean = false;
  isAdmin: boolean = false;

  ngOnInit(): void {
    this.as.user.subscribe((user) => {
      if (user) this.isUser = true;
      else this.isUser = false;
    });

    this.as.user.subscribe((user) => {
      if (user?.email == 'admin@gmail.com') this.isAdmin = true;
      else this.isAdmin = false;
    });
  }

  logout() {
    this.as.logout();
  }
}
