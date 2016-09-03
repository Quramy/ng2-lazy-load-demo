import { NgModuleFactoryLoader } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainHomeComponent } from "../main/main-home.component";
import { MainAboutComponent } from "../main/main-about.component";

// export function loadSubModule() {
//   // Naive
//   return new Promise(resolve => {
//     resolve(require("../sub/sub.module")["SubModule"]);
//   });
//
//   // You can use create submodule's chunk with webpack es6-promise-loader.
//   // However you should switch the module to laad with the context:
//   // * JiT:
//   return require("es6-promise!../sub/sub.module")("SubModule");
//   // * AoT:
//   return require("es6-promise!../sub/sub.module.ngfactory")("SubModuleNgFactory");
// }

export const appRoutes: Routes = [
  {path: "", component: MainHomeComponent},
  {path: "about", component: MainAboutComponent },
  // {path: "sub", loadChildren: loadSubModule},
  {path: "sub", loadChildren: "es6-promise!../sub/sub.module#SubModule" },
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true});
