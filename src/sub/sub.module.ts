import { NgModule } from "@angular/core";
import { subRouting } from "./sub.routing";
import { SubAppComponent } from "./sub-app.component";
import { SubHomeComponent } from "./sub-home.component";

@NgModule({
  imports: [
    subRouting,
  ],
  declarations: [
    SubAppComponent,
    SubHomeComponent,
  ],
})
export class SubModule {
}
