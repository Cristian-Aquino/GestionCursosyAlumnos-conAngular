import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Curso } from "../../features/dashboard/cursos/modelos";
import { generarIdRandom } from "../../shared/funciones";

let CURSOS_DB: Curso[] = [
    {id: generarIdRandom(4), nombre: 'React', fechaCreacion: new Date(),},
    {id: generarIdRandom(4), nombre: 'JavaScript', fechaCreacion: new Date(),},
    {id: generarIdRandom(4), nombre: 'Android', fechaCreacion: new Date(),}
]

@Injectable({ providedIn: 'root'})
export class CursosService {

    getCursos(): Observable<Curso[]>{
        return of([...CURSOS_DB]);
    }

    crearCurso(curso: Curso): Observable<Curso>{
        const cursoCreado = {...curso};
        CURSOS_DB.push(cursoCreado);
        return of(cursoCreado);
    }

    actualizarCursoPorId(id: string, actualizar: Partial<Curso>){
        CURSOS_DB = CURSOS_DB.map((curso) => curso.id === id ? {...curso, ...actualizar} : curso)
    
        return new Observable<Curso[]>((observer) => {
            observer.next(CURSOS_DB);
            observer.complete();
        })
    }

    removerCursoPorId(id: string): Observable<Curso[]>{
        CURSOS_DB = CURSOS_DB.filter((curso) => curso.id != id);
        return of(CURSOS_DB);
      }
}