import { Routes, RouterModule } from "@angular/router";
import { SubAppComponent } from "./sub-app.component";
import { SubHomeComponent } from "./sub-home.component";

export const subRoutes: Routes = [
  {
    path: "",
    component: SubAppComponent,
    children: [
      { path: "", component: SubHomeComponent }
    ]
  },
];

export const subRouting = RouterModule.forChild(subRoutes);
