// System

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Components

import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './header/hero/hero.component';
import { NavComponent } from './header/nav/nav.component';
import { PostComponent } from './post/post.component';
import { PostAddComponent } from './post-add/post-add.component';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/admin/add/add.component';
import { SigninComponent } from './signin/signin.component';
import { AppComponent } from './app.component';
import { PanelComponent } from './pages/admin/panel/panel.component';

//Routing

import { AppRoutingModule } from './app-routing.module';

// Services

import { AuthService } from './auth.service';
import { DataService } from './data.service';

// FireBase

import { firebaseConfig } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';
//import {  FirebaseObjectObservable } from '@angular/fire/database';

import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './pages/util/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    NavComponent, 
    PostAddComponent,
    PostComponent,
    PostAddComponent,
    HomeComponent,
    AddComponent,
    PanelComponent,
    SigninComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig),       
    AngularFireDatabaseModule,               
    AngularFireAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
                    
  ],
  providers: [DataService, AuthService, AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
