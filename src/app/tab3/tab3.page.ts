import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  constructor(private http:HttpClient) {}
  bio:string;
  nombre:string;
  seguidores:number;
  siguiendo:number;

  obtenerPerfil():void{
    this.http.get('https://login-ng-3fec3-default-rtdb.firebaseio.com/usuario.json')
    .subscribe(respueta=>{
      console.log(respueta);

      let res=Object.assign(respueta);

      this.bio=res.bio;
      this.nombre=respueta['nombre'];
      this.seguidores=respueta['seguidores'];
      this.siguiendo=respueta['siguiendo'];
    })
  }

  obtenerPublicacion():void{
   // this.http.get()
  }

  ngOnInit(){
    this.obtenerPerfil();
  }
}
