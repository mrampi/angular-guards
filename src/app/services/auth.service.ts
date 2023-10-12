import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  islogged = false;
  isAdmin = !true;

  constructor(private http: HttpClient) { }

  login(): Observable<boolean> {
    const token = 'your-bearer-token-here';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'My-Custom-Header': 'foobar'
    };

    this.http.get('https://jsonplaceholder.typicode.com/users', { headers })
    return new Observable((observer) => {
      setTimeout(() => {
        this.islogged = true;
        observer.next(true);
      }, 1000);
    });
  }

  logout() {
    this.islogged = false;
  }
}
