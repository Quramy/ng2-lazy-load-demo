# Angular2 Lazy Module Loading Demo

It's a sample repository to explain how to lazy module loading in your Angular2 App with webpack2.

This repository includes JiT(Just in Time) and AoT(Ahead of Time) demos.
The AoT demo uses `ngc`([angular/compiler-cli](https://github.com/angular/angular/blob/master/modules/%40angular/compiler-cli/README.md)).

## Demonstration

https://quramy.github.io/ng2-lazy-load-demo/index.html

## Build

To build this in your local machine, clone this repository and exec the following:

```sh
npm i
npm run build
npm start
```

## How to implement async sub module loading?

In Angular2 router, to load sub modules asynchronously, you can use `loadChildren`.

The following code explains the steps to achieve AoT lazy loading:

```ts
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
```

And the following part of webpack.config.js is important:

```js
/* webpack.config.js */
// ...
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          "awesome-typescript-loader",
          "angular2-load-children-loader" // this loader replace loadChildren value to function to call require.
        ],
        exclude: /node_modules/
      }
    ],

// ...

  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "http://localhost:3000/dist/",
    filename: "[name].js",
    chunkFilename: "[name].chunk.js", // the chunk files are created by es6-promise-loader.
  },

// ...
```

Please see also [https://github.com/Quramy/angular2-load-children-loader](https://github.com/Quramy/angular2-load-children-loader).
