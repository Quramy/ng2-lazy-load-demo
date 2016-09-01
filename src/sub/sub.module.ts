import { NgModule } from "@angular/core";
import { subRouting } from "./sub.routing";
import { DetailComponent } from "./detail.component";
import { SummaryComponent } from "./summary.component";
import { SubHomeComponent } from "./sub-home.component";

@NgModule({
  imports: [
    subRouting,
  ],
  declarations: [
    SubHomeComponent,
    DetailComponent,
    SummaryComponent,
  ],
})
export class SubModule {
}
