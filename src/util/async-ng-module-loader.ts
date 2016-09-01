/*
 * Based on
 * https://gist.github.com/brandonroberts/02cc07face25886fe142c4dbd8da1340
 *
 */
import { Injectable, NgModuleFactory, NgModuleFactoryLoader, Compiler } from '@angular/core';

class LoaderCallback {
  constructor(public callback: Function, public exportName = "default") {}
}

export function load(callback: Function, exportName?: string): any {
  return new LoaderCallback(callback, exportName);
};


/*
 * NgModuleFactoryLoader that uses Promise to load NgModule type and then compiles them.
 * @experimental
 */
@Injectable()
export class AsyncNgModuleLoader implements NgModuleFactoryLoader {
  constructor(private compiler: Compiler) {}

  load(modulePath: string | LoaderCallback): Promise<NgModuleFactory<any>> {
    if (modulePath instanceof LoaderCallback) {
      const loaderCallback = (modulePath as LoaderCallback)

      return loaderCallback.callback(loaderCallback.exportName)
      .then((type: any) => checkNotEmpty(type, loaderCallback.exportName))
      .then((type: any) => this.compiler.compileModuleAsync(type));
    }

    return Promise.resolve(null);
  }
}

function checkNotEmpty(value: any, exportName: string): any {
  if (!value) {
    throw new Error(`Cannot find export "${exportName}" in module`);
  }
  return value;
}
