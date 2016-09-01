import { NgModuleFactoryLoader } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TopComponent } from "./top.component";
import { AboutComponent } from "./about.component";
import { subRoutes } from "../sub/sub.routing";

// function loadSubModule() {
//   // Naive
//   return new Promise(resolve => {
//     resolve(require("../sub/sub.module")["SubModule"]);
//   });
//
//   // webpack chunk with es6-promise-loader
//   return require("es6-promise!../sub/sub.module")("SubModule");
//
// }

function load(r: any, exportName = "default") {
  // Naive
  // return new Promise(resolve => resolve(r[exportName]));
  //
  // webpack chunk
  return r(exportName) as Promise<any>;
}

const appRoutes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "top"},
  {path: "top", component: TopComponent},
  {path: "about", component: AboutComponent },
  {path: "sub", loadChildren: () => load(require("es6-promise!../sub/sub.module"), "SubModule")},
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true});
