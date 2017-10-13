import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CountriesComponent } from './countries/countries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FwModule } from "fw/fw.module";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from "app/app.routing";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountriesComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    FwModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
