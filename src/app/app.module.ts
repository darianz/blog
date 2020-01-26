import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './header/hero/hero.component';
import { NavComponent } from './header/nav/nav.component';
import { PostComponent } from './post/post.component';
import { PostAddComponent } from './post-add/post-add.component';
import { HomeComponent } from './pages/home/home.component';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    NavComponent, 
    PostAddComponent,
    PostComponent, PostAddComponent, HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
