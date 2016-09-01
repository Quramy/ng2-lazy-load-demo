import { Routes, RouterModule } from "@angular/router";
import { DetailComponent } from "./detail.component";
import { SummaryComponent } from "./summary.component";

export const subRoutes: Routes = [
  { path: "detail", component: DetailComponent },
  { path: "summary", component: SummaryComponent },
];

export const subRouting = RouterModule.forChild(subRoutes);
