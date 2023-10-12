import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

export type User = {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loading = false;
  user: User = {
    username: 'mario',
    password: '123'
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  login() {
    console.log(this.user);
    this.loading = true;

    this.authService
    .login()
    .subscribe({
      next: () => {
        
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
