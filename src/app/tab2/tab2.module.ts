import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {
  constructor(private http:HttpClient){}

descripcionFoto:string='';
usuario:string='';

urlFoto:String='../assets/images/feed/feed1.png';

datosPublicacion:any={
  caption:this.descripcionFoto,
  usuario: this.usuario,
  urlFoto:this.urlFoto
}

testFn(params) : void{
  
}
  crearPublicacion(params:{usuario:string, caption:string,urlForo:string}):void{
    this.http.post('https://login-ng-3fec3-default-rtdb.firebaseio.com/publicaciones.json',datosPublicacion)
    .subscribe(datosRespuesta=>{
      console.log(datosRespuesta);
    })
  }
}

