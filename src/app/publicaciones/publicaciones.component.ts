import { Component, OnInit } from '@angular/core';
import { Publicaciones } from './publicaciones';
import { PublicacionRoutingModule} from '../publicacion/publicacion-routing.module'
import {HttpClient} from '@angular/common/http'
import * as data from '../../assets/feed.json';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {
  constructor(private http: HttpClient) { }

  publicacionesArreglo: Publicaciones[] = []

  datos = data;
  datosUsuario: any = this.datos.usuario;
  publicaciones : any = this.datos.publicaciones;

  _filtrarPublicaciones: string = this.datosUsuario.publicaciones;

  publicacionesPorUsuario= [];

  get filtrarPublicaciones(): string{
    return this._filtrarPublicaciones;
  }
  
  set filtrarPublicaciones(valor: string){
    console.log(valor);
    console.log('1');
    this._filtrarPublicaciones =valor;
    console.log(this._filtrarPublicaciones);
    this.publicacionesPorUsuario = this.filtroPublicaciones(valor);
    console.log(this.publicacionesPorUsuario);
  }

  filtroPublicaciones(nombreUsuario: string): []{
    nombreUsuario = nombreUsuario.toLocaleLowerCase();
    return this.publicaciones.filter((publicacion: any) => publicacion.usuario.toLocaleLowerCase().includes(nombreUsuario))
  }

  ngOnInit() {
    this.filtrarPublicaciones = this.datosUsuario.nombre;
  }

  /*
  publicacionesArreglo: Publicaciones[] = [
    {
      imagen: '../assets/images/Post 1.png',
      id: 1
    },
    {
      imagen: '../assets/images/Post 2.png',
      id: 2
    },
    {
      imagen: '../assets/images/Post 3.png',
      id: 3
    },
    {
      imagen: '../assets/images/Post 4.png',
      id: 4
    },
    {
      imagen: '../assets/images/Post 5.png',
      id: 5
    },
    {
      imagen: '../assets/images/Post 6.png',
      id: 6
    },
    {
      imagen: '../assets/images/Post 7.png',
      id: 7
    },
    {
      imagen: '../assets/images/Post 8.png',
      id: 8
    },
    {
      imagen: '../assets/images/Post 9.png',
      id: 9
    },
    {
      imagen: '../assets/images/Post 10.png',
      id: 10
    },
    {
      imagen: '../assets/images/Post 11.png',
      id: 11
    },
    {
      imagen: '../assets/images/Post 12.png',
      id: 12
    },
  ]
  */

}