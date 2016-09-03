import 'ts-helpers';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { platformBrowser } from '@angular/platform-browser';
import { MainModuleNgFactory } from "./main/main.module.ngfactory";

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
