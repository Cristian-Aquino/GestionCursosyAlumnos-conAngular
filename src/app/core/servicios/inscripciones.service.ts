import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Inscripcion } from "../../features/dashboard/inscripciones/store/modelos";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root'})
export class InscripcionesService{
    constructor(private httpClient: HttpClient){}

    getInscripciones(): Observable<Inscripcion[]>{
        return this.httpClient.get<Inscripcion[]>(`${environment.ApiBaseURL}/inscripciones?_embed=curso&_embed=usuario`);
    }
}