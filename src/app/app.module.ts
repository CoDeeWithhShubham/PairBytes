import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostDetailsComponent } from './component/post-details/post-details.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PostStartComponent } from './component/post-start/post-start.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailsComponent,
    HeaderComponent,
    PostStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
