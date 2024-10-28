import { Injectable } from '@angular/core';
import { Usuario } from '../../features/dashboard/usuarios/modelos';
import { delay, map, Observable, of } from 'rxjs';

let USUARIOS_DB: Usuario[] = [
  {id: 'Av1d', nombre: 'Silvana', apellido: 'Pepita', email:'silvana_pepita@gmail.com', fecha_creado: new Date()}
];

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  getUsuarios(): Observable<Usuario[]>{
    return new Observable((observer) => {

      setInterval(() => {
        observer.next(USUARIOS_DB);
        observer.complete();
      }, 3000);
    })
  }

  getById(id: string): Observable<Usuario | undefined>{
    return this.getUsuarios().pipe(map((usuarios) => usuarios.find((usuario) => usuario.id === id)));
  }

  actualizarUsuarioPorId(id: string, actualizar: Partial<Usuario>){
    USUARIOS_DB = USUARIOS_DB.map((usuario) => usuario.id === id ? {...usuario, ...actualizar} : usuario)

    return new Observable<Usuario[]>((observer) => {

      setInterval(() => {
        observer.next(USUARIOS_DB);
        observer.complete();
      }, 1000);
    })
  }

  removerUsuarioPorId(id: string): Observable<Usuario[]>{
    USUARIOS_DB = USUARIOS_DB.filter((usuario) => usuario.id != id);
    return of(USUARIOS_DB).pipe(delay(1000))
  }
  
}