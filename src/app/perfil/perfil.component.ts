import { Component, OnInit } from '@angular/core';
import { FirebaseDbService } from '../firebase-db.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
  
  @Component({
    selector: 'perfil',
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.scss'],
  })
  export class PerfilComponent implements OnInit {
    constructor(private db: FirebaseDbService) { }
  
    bio: String;
    nombre: String;
    seguidores: number;
    siguiendo: number;
  
    editando: boolean = false;
  
    nuevoUsuario: String;
    nuevaPresentacion: String;
  
  
    guardarCambios(): void {
      // this.db.updateBioUsuario(params).subscribe(res => {
      //   console.log(res);
      // })
    }
  
    toggleEditar(): void {
      if(this.editando) {
        this.guardarCambios();
      }
      this.editando = !this.editando;
    }
  
    obtenerPerfil() : void {
  
      this.db.getPerfilUsuario().subscribe(res => {
        console.log(res);
  
        let perfilUsuario = Object.assign(res);
  
        this.bio = perfilUsuario.bio;
        this.nombre = perfilUsuario.nombre;
        this.seguidores = perfilUsuario.seguidores;
        this.siguiendo = perfilUsuario.siguiendo;
      })
    }
  
  
    obtenerPublicaciones() :void {
    //  this.db.getPublicaciones().subscribe(res => {
    //    console.log(res);
    //  })
    }
  
    obtenerPublicacionesUsuario(): void {
      this.db.getPublicacionesUsuario();
    }
  
    ngOnInit() {
      this.obtenerPerfil();
  
      //this.obtenerPublicaciones();
  
      this.obtenerPublicacionesUsuario();
    }
  
  }