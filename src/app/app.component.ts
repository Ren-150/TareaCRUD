import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public usuarioService:UsuarioService){

  }
  nombre = "";
  apellidos = "";
  edad = "";
  num= 1;
  lista : any[] = [];
  guardar(){
    var usuario:any={
      num:this.num++,
      nombre:this.nombre,
      apellidos:this.apellidos,
      edad:this.edad
    }
    this.usuarioService.save(usuario)
  }
  listar(){
    this.lista=this.usuarioService.listar()
  }
  eliminar(usuario:any){
    this.usuarioService.eliminar(usuario);
  }
}
