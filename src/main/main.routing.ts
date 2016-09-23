import { Routes, RouterModule } from "@angular/router";
import { MainHomeComponent } from "./main-home.component";
import { MainAboutComponent } from "./main-about.component";

// import { SubAppComponent } from "../sub/sub-app.component";
// import { SubHomeComponent } from "../sub/sub-home.component";
// import { SubModule } from "../sub/sub.module";

export const appRoutes: Routes = [
  {path: "", component: MainHomeComponent},
  {path: "about", component: MainAboutComponent },

  /* 1. Simple nested routing: */
  // The following configuration allows to nested routing.
  // But the sub components are included bundle.js so the browser loads them on init.
  //
  // {
  //   path: "sub",
  //   component: SubAppComponent,
  //   children: [
  //     {path: "", component: SubHomeComponent}
  //   ]
  // },
  //

  /* 2. Separate sub modules and use load children callback function: */
  // See the loadSubModule function in this code.
  // {path: "sub", loadChildren: loadSubModule},

  /* 3. Auto switching module or moduleFactory with angular2-load-children-loader */
  // See the loader section of webpack.config.js .
  {path: "sub", loadChildren: "es6-promise?,[name]!../sub/sub.module#SubModule" },

];

// export function loadSubModule(): any {
//   // 2-1 Naive loading sub module:
//   // It's synchronous loading
//   // return SubModule;
//
//   // 2-2 Async module load with es6-promise-loader:
//   // You can create submodule's chunk with webpack es6-promise-loader.
//   // However you should switch the module to load with the context:
//   // * JiT:
//   // return require("es6-promise!../sub/sub.module")("SubModule");
//   // * AoT:
//   // return require("es6-promise!../sub/sub.module.ngfactory")("SubModuleNgFactory");
// }

export const routing = RouterModule.forRoot(appRoutes, { useHash: true});
