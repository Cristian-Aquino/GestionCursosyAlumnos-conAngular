import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component"
import { HttpClientTestingModule, provideHttpClientTesting } from "@angular/common/http/testing";
import { SharedModule } from "../../../shared/shared.module";
import { MockProvider } from 'ng-mocks';
import { AuthService } from "../../../core/servicios/auth.service";
import { of } from "rxjs";

describe("LoginComponent", () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpClientTestingModule, SharedModule],
            providers: [provideHttpClientTesting(),
                MockProvider(AuthService, {
                    login() {
                        return of();
                    }
                })
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
    })

    it("El componente debe hacer sido instanciado", () => {
        expect(component).toBeTruthy();
    });

    it("El email debe ser requerido", () => {
        const emailControl = component.loginForm.get("email");

        emailControl?.setValue("");
        expect(emailControl?.invalid).toBeTrue();
    });

    it("Al llamar al iniciarSesion si el form es invalido debe marcar los campos como touched", () => {
        const spyOnMarkAllAsTouched = spyOn(component.loginForm, "markAllAsTouched");
        component.loginForm.setValue({email: "", password: ""})

        component.iniciarSesion();
        expect(spyOnMarkAllAsTouched).toHaveBeenCalledTimes(1);
    });

    //it("Al llamar al iniciarSesion debe llamar al login del AuthService", () => {
    //    component.loginForm.setValue({email:"email@prueba.com", password: "123456",});
    //    const spyOnLogin = spyOn(component, "login");
    //    
    //    component.iniciarSesion();
    //    expect(spyOnLogin).toHaveBeenCalled();
    //});

    it("El toggle de input type del campo password debe alternar entre password y text", () => {
        component.passwordInputType = "password";
        component.cambiarPasswordTipoInput();
        
        expect(component.passwordInputType).toBe("text");

        component.passwordInputType = "text";
        component.cambiarPasswordTipoInput();
        expect(component.passwordInputType).toBe("password");
    });
})