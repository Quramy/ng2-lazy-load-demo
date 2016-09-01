import 'ts-helpers';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from "./app/app.module.ngfactory";

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
