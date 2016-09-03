import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MainAppComponent } from './main-app.component';
import { routing } from "./main.routing";
import { MainHomeComponent } from "./main-home.component";
import { MainAboutComponent } from "./main-about.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
  ],
  declarations: [
    MainAppComponent,
    MainHomeComponent,
    MainAboutComponent,
  ],
  bootstrap: [ MainAppComponent ],
})
export class MainModule { }

