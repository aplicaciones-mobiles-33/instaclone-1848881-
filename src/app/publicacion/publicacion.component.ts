import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { Location } from '@angular/common';

import { HttpClient } from '@angular/common/http';
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

  constructor(private rutaActiva: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
   
  }

}