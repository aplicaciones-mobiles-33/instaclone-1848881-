import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

import {HttpClientModule} from '@angular/common/Http';

//Firebase App
import { environment } from 'src/environments/environment';
import{AngularFireModule} from '@angular/fire/compat';

//Servicios
import { FirebaseDbService } from './firebase-db.service';

@NgModule({
  declarations: [PerfilComponent, AppComponent],
  entryComponents: [],
  imports: [
    HttpClientModule,
    FirebaseDbService,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,    
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
