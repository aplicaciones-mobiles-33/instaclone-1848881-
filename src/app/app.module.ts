import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

import {HttpClient} from '@angular/common/Http';

//Firebase App
import { environment } from 'src/environments/environment';
import{AngularFireModule} from '@angular/fire/compat';


@NgModule({
  declarations: [PerfilComponent, AppComponent],
  entryComponents: [],
  imports: [
    HttpClient,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,    
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
