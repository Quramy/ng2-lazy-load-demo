import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs';

import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from "./app/app.module.ngfactory";

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
