import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from "./app/app.module.ngfactory";

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
