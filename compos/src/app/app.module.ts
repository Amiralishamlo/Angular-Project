import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';
import { ModsModule } from './mods/mods.module';
import { ViewsModule } from './views/views.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    AppRoutingModule,
    ModsModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
