import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PublicacionRoutingModule} from '../publicacion/publicacion-routing.module'
import {HttpClient} from '@angular/common/http'
//import * as data from '../../assets/feed.json';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {
  constructor(private http: HttpClient) { }

  publicacionesPorUsuario= [];
  
  obtenerPublicaciones():void{
    this.http.get('https://login-ng-3fec3-default-rtdb.firebaseio.com/').subscribe(publicacionesRespuesta=>{
      console.log(publicacionesRespuesta);
    })
  }
  ngOnInit() {
    this.obtenerPublicaciones();
  }
}