import { Injectable } from '@angular/core';
import { Usuario } from '../../features/dashboard/usuarios/modelos';
import { concatMap, delay, forkJoin, map, Observable, of } from 'rxjs';
import { generarIdRandom } from '../../shared/funciones';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseURL = environment.ApiBaseURL;

  constructor(private httpClient: HttpClient) {}

  getUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}/usuarios`)
  }

  getAlumnos(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}/usuarios?rol=Alumno`)
  }

  getById(id: string): Observable<Usuario | undefined>{
    return this.httpClient.get<Usuario>(`${this.baseURL}/usuarios/${id}`);
  }

  actualizarUsuarioPorId(id: string, actualizar: Partial<Usuario>){
    
    return this.httpClient.patch<Usuario>(`${this.baseURL}/usuarios/${id}`, actualizar).pipe(concatMap(
      () => this.getUsuarios()));
  }

  removerUsuarioPorId(id: string): Observable<Usuario[]>{
    return this.httpClient.delete<Usuario>(`${this.baseURL}/usuarios/${id}`).pipe(concatMap(
      () => this.getUsuarios()));
  }

  crearUsuario(data: Omit<Usuario, 'id'>): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${this.baseURL}/usuarios`, {
      ...data,
      rol: "Usuario",
      password: generarIdRandom(8),
      token: generarIdRandom(20),
      fecha_creado: new Date().toISOString(),
    })
  }
  
}