import { Component } from "@angular/core";

@Component({
  selector: "sub-home",
  template: `
    <h2>Sub</h2>
    <nav>
      <a routerLink="detail">Detail</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class SubHomeComponent {
}
