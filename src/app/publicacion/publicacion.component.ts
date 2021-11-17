import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { Publicaciones } from '../publicaciones/publicaciones';
import * as data from '../../assets/feed.json';
import { Location } from '@angular/common';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss'],
})
export class PublicacionComponent implements OnInit {
  _filtrarPublicacion: number;
  publicacion: any;
  usuario: any;
  datos: any = data;
  publicaciones: any = this.datos.publicaciones;
  detallePublicacion: any;

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
    this._filtrarPublicacion = this.rutaActiva.snapshot.params.id;
    console.log(this._filtrarPublicacion);
    this.detallePublicacion = this.cargarDetallePublicacion(this._filtrarPublicacion);
  }

}