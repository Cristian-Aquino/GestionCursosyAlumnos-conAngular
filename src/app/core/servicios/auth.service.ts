import { Injectable } from "@angular/core";
import { AuthData } from "../../features/auth/modelos";
import { BehaviorSubject, map, Observable, of, throwError } from "rxjs";
import { Usuario } from "../../features/dashboard/usuarios/modelos";
import { generarIdRandom } from "../../shared/funciones";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable({providedIn: "root"})
export class AuthService{

    private _authUsuario$ = new BehaviorSubject<null | Usuario>(null);
    public authUsuario$ = this._authUsuario$.asObservable();

    private baseURL = environment.ApiBaseURL;

    constructor(private router: Router, private httpClient: HttpClient){}

    private handleAutenticacion(usuarios: Usuario[]): Usuario | null {
        if(!!usuarios[0]){
            this._authUsuario$.next(usuarios[0]);
            localStorage.setItem("token", usuarios[0].token);
            return usuarios[0];
        }
        else{
            return null;
        }
    }

    login(data: AuthData): Observable<Usuario>{

        return this.httpClient.get<Usuario[]>(`${this.baseURL}/usuarios?email=${data.email}&password=${data.password}`).pipe(
            map((usuarios) => {
                const usuario = this.handleAutenticacion(usuarios);
                if(usuario){
                    return usuario;
                }
                else{
                    throw new Error("Los datos son invalidos");
                }
            }));
    }

    logout(){
        this._authUsuario$.next(null);
        localStorage.removeItem("token");
        this.router.navigate(["auth", "login"]);
    }

    verificarToken(): Observable<boolean>{

        return this.httpClient.get<Usuario[]>(`${this.baseURL}/usuarios?token=${localStorage.getItem("token")}`
                ).pipe(map((usuarios) => {
                    const usuario = this.handleAutenticacion(usuarios);
                    return !!usuario;
                }));
    }

}