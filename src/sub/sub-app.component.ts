import { Component } from "@angular/core";

@Component({
  selector: "sub-home",
  template: `
    <h2>Sub App</h2>
    <router-outlet></router-outlet>
  `
})
export class SubAppComponent {
}
