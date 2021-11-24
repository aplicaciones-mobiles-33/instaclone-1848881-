import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { FirebaseDbService } from '../firebase-db.service';
import { PublicacionComponentModule } from './publicacion.module';
//import * as data from '../../assets/feed.json';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit {

  //_filtrarPublicacion: number;
  //publicacion: any;
  //usuario: any;
  //datos: any = data;
  publicacionId:any;
  //publicaciones: any = this.datos.publicaciones;
  //detallePublicacion: any;

  get filtrarPublicacion(): number{
    return this._filtrarPublicacion;
  }
  set filtrarPublicacion(valor: number){
    console.log(valor);
    this._filtrarPublicacion = valor;
    this.detallePublicacion = this.cargarDetallePublicacion(valor);
  }

  cargarDetallePublicacion(idPublicacion: number): any {
    console.log('Publicacion');
    return this.publicaciones.find((publicacion: any) => publicacion.id)
  }

  volver(): void{
    this._location.back();
  }

  constructor(
    private rutaActiva: ActivatedRoute,
     private _location: Location)ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

     private db: FirebaseDbService) { }

     obtenerDetallePublicacion(param): void {

      //agregar FN para obtenerDetalle de publicacion
  
      this.db.getPublicacion(param).subscribe(res=> {
        console.log(res);
  
        let respuesta = Object.assign(res);
  
        this.descripcionPost = respuesta.descripcionPost;
        this.usuario = respuesta.usuario;
        this.urlImagen = respuesta.urlImagen;
  
      })
  
    }

  ngOnInit() {
    this.publicacionId = this.RutaActiva.snapshot.params.id;
 
    console.log(this.RutaActiva.snapshot.params.id);
 
    this.obtenerDetallePublicacion(this.publicacionId);
  }

}