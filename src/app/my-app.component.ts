import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [
    `h1 {
      color: green;
    }`,
  ],
  template: `
  <div>
    <h1>Hello</h1>
    <a routerLink="/top">top</a>
    <a routerLink="/about">about</a>
    <a routerLink="/sub/detail">sub detail</a>
    <router-outlet></router-outlet>
  </div>
  `,
})
export class MyApp {
  constructor() {}
}
