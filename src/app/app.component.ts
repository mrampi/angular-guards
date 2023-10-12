import { Component } from '@angular/core';
import { Item } from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Item[] = [
    {
      title: 'Home',
      link: '/',
      active: true
    },
    {
      title: 'Admin',
      link: '/admin',
      active: false
    },
    {
      title: 'Auth',
      link: '/auth',
      active: false
    },
    {
      title: 'Errors',
      link: '/errors',
      active: false
    },
    {
      title: 'Logout',
      link: '/auth/logout',
      active: false
    }
  ]
}
