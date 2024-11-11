import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { AuthData } from "../../features/auth/modelos";
import { Usuario } from "../../features/dashboard/usuarios/modelos";
import { MockProvider } from "ng-mocks";
import { NavigationExtras, Router } from "@angular/router";

const mockUsuario: Usuario = {id:"wead", nombre:"mock", apellido: "usuario", email: "ejemplo@email.com", password: "123456", fecha_creado: new Date(),token: "afadsfsdfasfasdfasdf"}
const mockAuthData: AuthData = { email: "ejemplo@email.com", password: "123456"};

fdescribe("AuthService", () => {

    let servicio: AuthService;
    let httpController: HttpTestingController;
    let router: Router;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AuthService,
                MockProvider(Router, {navigate: (commands: any[], extras: NavigationExtras) => { 
                    return new Promise((res) => res(true) ) }
                })
            ]
        })

        httpController = TestBed.inject(HttpTestingController);
        servicio = TestBed.inject(AuthService);
        router = TestBed.inject(Router);
        localStorage.clear();
    });

    it("El servicio debe estar definido", () => {
        expect(servicio).toBeTruthy();
    });

    it("Debe realizarse el login y debe establecer el token en localStorage", (done) => {
        servicio.login(mockAuthData).subscribe({
            next: (usuario) => {
                expect(usuario).toEqual(mockUsuario);
                expect(localStorage.getItem("token")).toEqual(mockUsuario.token);
                done();
            }
        });

        const mockRequest = httpController.expectOne({
            url: `${servicio["baseURL"]}/usuarios?email=${mockAuthData.email}&password=${mockAuthData.password}`,
            method: "GET"
        });

        mockRequest.flush([mockUsuario]);
    });

    it("Debe retornar un error al realizar un login invalido", (done) => {

        servicio.login(mockAuthData).subscribe({
            error: (error) => {
                expect(error).toBeInstanceOf(Error);
                expect(error["message"]).toBe("Los datos son invalidos");
                done();
            }
        })
        const mockRequest = httpController.expectOne({
            url: `${servicio["baseURL"]}/usuarios?email=${mockAuthData.email}&password=${mockAuthData.password}`,
            method: "GET"
        });

        //mockRequest.flush([], { status: 401, statusText: "Unauthorized"});
        mockRequest.flush([]);
    });

    it("Logout debe remover el toke del localStorage y debe eliminar el usuario autenticado. Y redirigir al login", (done) => {
        const spyOnNavigate = spyOn(router, "navigate");
        
        servicio.login(mockAuthData).subscribe();

        const mockRequest = httpController.expectOne({
            url: `${servicio["baseURL"]}/usuarios?email=${mockAuthData.email}&password=${mockAuthData.password}`,
            method: "GET"
        });

        mockRequest.flush([mockUsuario]);

        servicio.logout();
        expect(localStorage.getItem("token")).toBeNull();
        servicio.authUsuario$.subscribe({
            next: (usuario) => {
                expect(usuario).toBeNull();
                done();
            }
        });

        expect(spyOnNavigate).toHaveBeenCalledOnceWith(["auth", "login"]);
    });

});