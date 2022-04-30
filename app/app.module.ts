import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SongsComponent } from './songs/songs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Song1Component } from './songs/song1/song1.component';


const appRoutes:Routes =[
  {path:'About', component: AboutComponent},
  {path:'Songs', component: SongsComponent},
  {path:'Songs/:songName', component: Song1Component}
  // children:[

  //   {path:'', component: SongsComponent},
  //   {path:'Songs/:songName', component: SongsComponent},
  // ]

]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SongsComponent,
    Song1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
