import { Injectable } from "@angular/core";
import { concatMap, Observable, of } from "rxjs";
import { Curso } from "../../features/dashboard/cursos/modelos";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable({ providedIn: 'root'})
export class CursosService {

    constructor(private httpClient: HttpClient){}
    
    private baseURL = environment.ApiBaseURL;
    
    getCursos(): Observable<Curso[]>{
        return this.httpClient.get<Curso[]>(`${this.baseURL}/cursos`);
    }

    crearCurso(curso: Omit<Curso, 'id'>): Observable<Curso>{
        
        return this.httpClient.post<Curso>(`${this.baseURL}/cursos`, {
            ...curso,
            fechaCreacion: new Date().toISOString(),
          });
    }

    actualizarCursoPorId(id: string, actualizar: Partial<Curso>){
        
        return this.httpClient.patch<Curso>(`${this.baseURL}/cursos/${id}`, actualizar).pipe(concatMap(
            () => this.getCursos()));
    }

    removerCursoPorId(id: string): Observable<Curso[]>{
        
        return this.httpClient.delete<Curso>(`${this.baseURL}/cursos/${id}`).pipe(concatMap(
            () => this.getCursos()));
      }
}