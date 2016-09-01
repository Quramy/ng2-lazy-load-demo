import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <h1>Angular2 Lazy Module Loading Demo</h1>
    <a routerLink="/top">Top</a>
    <a routerLink="/about">About</a>
    <a routerLink="/sub">Sub(lazy load)</a>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class MyApp {
  constructor() {}
}
