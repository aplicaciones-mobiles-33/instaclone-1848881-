import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {
  getPublicacionesUsuario() {
    throw new Error('Method not implemented.');
  }
  

  constructor(private http:HttpClient) {}
  resArray: [];
//publicaciones
  getPublicaciones(){
    return this.http.get('https://login-ng-3fec3-default-rtdb.firebaseio.com/publicaciones.json')
    .pipe(
      map(res=>{
        for(const key in res) {
          this.resArray.push( { ...res[key], key});
        }return this.resArray;
      })
    )
  }

 
  
  postPublicaciones(infoPost){
    return this.http.post('https://login-ng-3fec3-default-rtdb.firebaseio.com/publicaciones.json',infoPost);
  }

  deletePost(idPost){
    return this.http.delete('https://login-ng-3fec3-default-rtdb.firebaseio.com/publicaciones/'+ idPost +'.json');
  }

  UpdatePost(idPost,infoPost){
    return this.http.put('https://login-ng-3fec3-default-rtdb.firebaseio.com/publicaciones/'+ idPost +'.json',infoPost);
  }

  //Perfil Usuario
  getPerfilUsuario(){
    return this.http.get('https://login-ng-3fec3-default-rtdb.firebaseio.com/usuario.json')
  }

  updateBioUsuario(nuevaBio){
    return this.http.put('https://login-ng-3fec3-default-rtdb.firebaseio.com/usuario.json/bio0sjon',nuevaBio );
  }

  updateNombreUsuario(nuevoNombreUsuario){
    return this.http.get('https://login-ng-3fec3-default-rtdb.firebaseio.com/usuario/nombre.json', nuevoNombreUsuario);
  }
}
