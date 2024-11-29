import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Inscripcion } from "../../features/dashboard/inscripciones/store/modelos";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root'})
export class InscripcionesService{
    constructor(private httpClient: HttpClient){}

    getInscripciones(): Observable<Inscripcion[]>{
        return this.httpClient.get<Inscripcion[]>(`${environment.ApiBaseURL}/inscripciones?_embed=curso&_embed=usuario`);
    }

    crearInscripcion(inscripcion: Omit<Inscripcion, 'id' | 'curso' | 'usuario'>): Observable<Inscripcion>{
        return this.httpClient.post<Inscripcion>(`${environment.ApiBaseURL}/inscripciones`, inscripcion)
    }
}