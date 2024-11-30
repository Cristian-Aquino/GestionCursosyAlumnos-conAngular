import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { concatMap, Observable } from "rxjs";
import { Inscripcion } from "../../features/dashboard/inscripciones/store/modelos";
import { environment } from "../../../environments/environment";
import { CursosService } from "./cursos.service";
import { Curso } from "../../features/dashboard/cursos/modelos";

@Injectable({ providedIn: 'root'})
export class InscripcionesService{
    private baseURL = environment.ApiBaseURL;

    constructor(private httpClient: HttpClient, private cursosServicio: CursosService){}

    getInscripciones(): Observable<Inscripcion[]>{
        return this.httpClient.get<Inscripcion[]>(`${environment.ApiBaseURL}/inscripciones?_embed=curso&_embed=usuario`);
    }

    crearInscripcion(inscripcion: Omit<Inscripcion, 'id' | 'curso' | 'usuario'>): Observable<Inscripcion>{
        return this.httpClient.post<Inscripcion>(`${environment.ApiBaseURL}/inscripciones`, inscripcion)
    }

    getInscripcionesPorAlumno(idAlumno?: string): Observable<Inscripcion[]>{
        return this.httpClient.get<Inscripcion[]>(`${environment.ApiBaseURL}/inscripciones?_embed=curso&&usuarioId=${idAlumno}`);
    }

    eliminarInscripcionPorId(id: string): Observable<Curso[]>{
        return this.httpClient.delete<Inscripcion>(`${this.baseURL}/inscripciones/${id}`).pipe(concatMap(
            () => this.cursosServicio.getCursos()));
    }
}