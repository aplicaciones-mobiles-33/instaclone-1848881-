import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PublicacionRoutingModule} from '../publicacion/publicacion-routing.module'
//import {HttpClient} from '@angular/common/http'
//import * as data from '../../assets/feed.json';
import { FirebaseDbService } from '../firebase-db.service';
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss'],
})
export class PublicacionesComponent implements OnInit {
  constructor(private db: FirebaseDbService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  publicaciones= [];
  obtenerPublicaciones(): void{
    this.db.getPublicaciones().subscribe(
      res=>{
        console.log(res);
        this.publicaciones=Object.assign(res);
       
      }
    )
  }
  ngOnit(){
    this.obtenerPublicaciones();
  }
  
}
