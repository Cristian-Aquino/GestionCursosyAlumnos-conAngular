import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Curso } from "../../features/dashboard/cursos/modelos";
import { generarIdRandom } from "../../shared/funciones";
import { Clase } from "../../features/dashboard/clases/modelos";

let CLASES_DB: Clase[] = [
    {id: generarIdRandom(4), tema: 'Modulos', duracion: 2,},
    {id: generarIdRandom(4), tema: 'Encriptacion', duracion: 2,},
    {id: generarIdRandom(4), tema: 'Variables', duracion: 1,}
]

@Injectable({ providedIn: 'root'})
export class ClasesService {

    getClases(): Observable<Clase[]>{
        return of([...CLASES_DB]);
    }

    crearClase(clase: Clase): Observable<Clase>{
        const claseCreada = {...clase};
        CLASES_DB.push(claseCreada);
        return of(claseCreada);
    }

    actualizarClasePorId(id: string, actualizar: Partial<Clase>){
        CLASES_DB = CLASES_DB.map((clase) => clase.id === id ? {...clase, ...actualizar} : clase)
    
        return new Observable<Clase[]>((observer) => {
            observer.next(CLASES_DB);
            observer.complete();
        })
    }

    removerClasePorId(id: string): Observable<Clase[]>{
        CLASES_DB = CLASES_DB.filter((clase) => clase.id != id);
        return of(CLASES_DB);
      }
}