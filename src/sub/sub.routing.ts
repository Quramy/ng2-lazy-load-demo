import { Routes, RouterModule } from "@angular/router";
import { DetailComponent } from "./detail.component";
import { SummaryComponent } from "./summary.component";
import { SubHomeComponent } from "./sub-home.component";

export const subRoutes: Routes = [
  {
    path: "",
    component: SubHomeComponent,
    children: [
      { path: "", component: SummaryComponent },
      { path: "detail", component: DetailComponent },
    ]
  },
];

export const subRouting = RouterModule.forChild(subRoutes);
