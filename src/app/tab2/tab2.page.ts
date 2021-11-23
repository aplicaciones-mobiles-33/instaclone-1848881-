import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private http:HttpClient){}

  descripcionFoto:string;
  usuario:string;
  
  urlFoto:String='../assets/images/feed/feed1.png';
  datosPublicacion:any;
  
  validarDatos(params): void{
    this.datosPublicacion= void{
      caption:this.descripcionFoto,
      usuario: this.usuario,
      urlFoto:this.urlFoto
    }
    console.log(this.datosPublicacion);
  }
    crearPublicacion(params:{usuario:string, caption:string,urlForo:string}):void{
      this.http.post('https://login-ng-3fec3-default-rtdb.firebaseio.com/publicaciones.json',this.datosPublicacion)
      .subscribe(datosRespuesta=>{
        console.log(datosRespuesta);
      })
    }

    ngOnit(){
      this.descripcionFoto='';
      this.usuario='';
      this.datosPublicacion= {
        
      }
      console.log(this.datosPublicacion);
    }
}
