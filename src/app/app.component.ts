import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Project';

  constructor(private as: AuthService) {}

  isOpen: boolean = false;
  isUser: boolean = false;
  isUserAdmin: boolean = false;

  ngOnInit(): void {
    this.as.user.subscribe((user) => {
      if (user) {
        this.isUser = true;
        this.as.userId = user.uid;
      } else this.isUser = false;
    });
  }

  admin() {
    this.as.user.subscribe((user) => {
      if (user && user.uid === 'ifESFXxDIzPRSv3cqAFHmP5NfPs1') {
        this.isUserAdmin = true;
      } else this.isUserAdmin = false;
    });
  }
}
