import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios:any[]=[]
  constructor() { }
  save(usuario:any){
    this.usuarios.push(usuario)
  }
  listar(){
    return this.usuarios
  }
  eliminar(usuario:any){
    this.usuarios.splice(usuario,1)
  }
}