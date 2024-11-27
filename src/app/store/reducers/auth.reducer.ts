import { createReducer, on } from "@ngrx/store";
import { Usuario } from "../../features/dashboard/usuarios/modelos";
import { AuthActions } from "../actions/auth.actions";

export const authFeatureName = 'auth';

export interface AuthState{
    autenticacionUsuario: Usuario | null;
}

const estadoInicial: AuthState = {
    autenticacionUsuario: null,
}

export const authReducer = createReducer(
    estadoInicial,
    on(AuthActions.setAutenticacionUsuario, (state, action) => {
        return {
            ...state,
            autenticacionUsuario: action.usuario,
        };
    }),

    on(AuthActions.unsetAutenticacionUsuario, (state) => {
        return {
            ...state,
            autenticacionUsuario: null,
        };
    })
);