import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './my-app.component';

import { routing } from "./app.routing";
import { TopComponent } from "./top.component";
import { AboutComponent } from "./about.component";
//import { SubModule } from "./sub/sub.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    //SubModule
  ],
  declarations: [
    MyApp,
    TopComponent,
    AboutComponent,
  ],
  entryComponents: [
  ],
  providers: [
    // appRoutingProviders,
  ],
  bootstrap: [ MyApp ],
})
export class AppModule { }

