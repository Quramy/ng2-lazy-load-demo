import { NgModule } from "@angular/core";
import { subRouting } from "./sub.routing";
import { DetailComponent } from "./detail.component";
import { SummaryComponent } from "./summary.component";

@NgModule({
  imports: [
    subRouting,
  ],
  declarations: [
    DetailComponent,
    SummaryComponent,
  ],
})
export class SubModule {
}
