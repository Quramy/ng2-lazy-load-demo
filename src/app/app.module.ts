import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './my-app.component';
import { routing } from "./app.routing";
import { TopComponent } from "./top.component";
import { AboutComponent } from "./about.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  declarations: [
    MyApp,
    TopComponent,
    AboutComponent,
  ],
  bootstrap: [ MyApp ],
})
export class AppModule { }

