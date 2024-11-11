import { Injectable } from "@angular/core";
import { concatMap, Observable, of } from "rxjs";
import { Curso } from "../../features/dashboard/cursos/modelos";
import { generarIdRandom } from "../../shared/funciones";
import { Clase } from "../../features/dashboard/clases/modelos";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

let CLASES_DB: Clase[] = [
    {id: generarIdRandom(4), tema: 'Modulos', duracion: 2, idCurso: '3dse'},
    {id: generarIdRandom(4), tema: 'Encriptacion', duracion: 2, idCurso: 'Drce'},
    {id: generarIdRandom(4), tema: 'Variables', duracion: 1, idCurso: 'Bfe4'}
]

@Injectable({ providedIn: 'root'})
export class ClasesService {

    constructor(private httpClient: HttpClient){}
    
    private baseURL = environment.ApiBaseURL;

    getClases(): Observable<Clase[]>{
        //return of([...CLASES_DB]);
        return this.httpClient.get<Clase[]>(`${this.baseURL}/clases`);
    }

    crearClase(clase:  Omit<Clase, 'id'>): Observable<Clase>{
        //const claseCreada = {...clase};
        //CLASES_DB.push(claseCreada);
        //return of(claseCreada);
        return this.httpClient.post<Clase>(`${this.baseURL}/clases`, {
            ...clase,
          });
    }

    actualizarClasePorId(id: string, actualizar: Partial<Clase>){
        //CLASES_DB = CLASES_DB.map((clase) => clase.id === id ? {...clase, ...actualizar} : clase)
    //
        //return new Observable<Clase[]>((observer) => {
        //    observer.next(CLASES_DB);
        //    observer.complete();
        //})
        return this.httpClient.patch<Clase>(`${this.baseURL}/clases/${id}`, actualizar).pipe(concatMap(
            () => this.getClases()));
    }

    removerClasePorId(id: string): Observable<Clase[]>{
        //CLASES_DB = CLASES_DB.filter((clase) => clase.id != id);
        //return of(CLASES_DB);
        return this.httpClient.delete<Clase>(`${this.baseURL}/clases/${id}`).pipe(concatMap(
            () => this.getClases()));
      }
}