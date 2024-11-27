import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Usuario } from "../../features/dashboard/usuarios/modelos";


//export const setAutenticacionUsuario = createAction(
//    "[Auth] Set Autenticacion Usuario",
//    props<{ usuario: Usuario}>()
//);

export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {
        'Set Autenticacion Usuario': props<{usuario: Usuario}>(),
        'Unset Autenticacion Usuario': emptyProps(),
    },
});

