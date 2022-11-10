import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private as: AuthService) {}
  isAdmin: boolean = false;

  ngOnInit(): void {
    this.as.user.subscribe((user) => {
      if (user?.email == 'admin@gmail.com') this.isAdmin = true;
      else this.isAdmin = false;
    });
  }
}
