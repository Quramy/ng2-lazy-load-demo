import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <h1>Angular2 Lazy Module Loading Demo</h1>
    <a routerLink="/">Main Home</a>
    <a routerLink="/about">Main About</a>
    <a routerLink="/sub">Sub</a>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class MainAppComponent {
}
