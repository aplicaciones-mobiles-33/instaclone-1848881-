import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  constructor(private db:FirebaseDbService) {}

  bio:string;
  nombre:string;
  seguidores:number;
  siguiendo:number;

  obtenerPerfil():void{

    this.db.getPerfilUsuario().subscribe(res=>{
      console.log(res);

      let PerfilUsuario=Object.assign(res);

      this.bio=PerfilUsuario.bio;
      this.nombre=PerfilUsuario.nombre;
      this.seguidores=PerfilUsuario.seguidores;
      this.siguiendo=PerfilUsuario.siguiendo;
    })
    
  }
  

  obtenerPublicaciones():void{
    this.db.getPublicaciones().subscribe(res=>{
      console.log(res); 
    })
  }

  ngOnInit(){
    this.obtenerPerfil();

    this.obtenerPublicaciones();
  }
}
