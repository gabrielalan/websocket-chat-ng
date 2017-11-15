import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChatModule } from './chat/chat.module';

import { AppComponent } from './app.component';
import { RouteModule } from './route/route.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    ChatModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
