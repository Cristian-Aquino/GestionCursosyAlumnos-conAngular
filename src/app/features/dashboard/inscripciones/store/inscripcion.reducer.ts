import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionActions } from './inscripcion.actions';
import { Inscripcion } from './modelos';
import { Curso } from '../../cursos/modelos';
import { Usuario } from '../../usuarios/modelos';
import { generarIdRandom } from '../../../../shared/funciones';

export const inscripcionFeatureKey = 'inscripcion';

const INCRIPCIONES_DB: Inscripcion[] = [{id:"reaf",idUsuario:"45fa",idCurso:"dasr",},
  {id:"fasd",idUsuario:"s54f",idCurso:"1da5",}
]

const CURSOS_DB: Curso[] = [
  {
    id: "2Lms",
    nombre: "React JS",
    cantidadClases: 13,
    fechaCreacion: new Date()
  },
  {
    id: "3fSc",
    nombre: "Android",
    cantidadClases: 25,
    fechaCreacion: new Date()
  },
  {
    id: "sdK3",
    nombre: "Java",
    cantidadClases: 18,
    fechaCreacion: new Date()
  },
]

const USUARIOS_DB: Usuario[] = [
  {
    id: "8ec5",
    nombre: "Jorge",
    apellido: "Espinoza",
    email: "jesponiza@gmail.com",
    password: "123456",
    token: "25derghvae145tgdw5n7",
    fecha_creado: new Date(),
    rol: "ADMIN"
  },
  {
    id: "QPa8",
    nombre: "nombre",
    apellido: "parrado",
    email: "npendiente@gmail.com",
    password: "cTMj9zYG",
    token: "HGrgHVMwXxSkRFcafYhA",
    fecha_creado: new Date(),
    rol: "Usuario"
  },
  {
    id: "Fcna",
    nombre: "eJEMPLO",
    apellido: "UNO",
    email: "juno@gmail.com",
    password: "bccEFgUp",
    token: "CwSoZypd4xLu1nXfTZJK",
    fecha_creado: new Date(),
    rol: "Usuario"
  },
]

export interface State {
  inscripciones: Inscripcion[];
  cursosOptions: Curso[];
  usuariosOptions: Usuario[];
}

export const initialState: State = {
  inscripciones: [],
  cursosOptions: [],
  usuariosOptions: [],
};

export const reducer = createReducer(
  initialState,
  on(InscripcionActions.cargarInscripcions, state => {
    return {
      ...state,
      inscripciones: [...INCRIPCIONES_DB]
    }
  }),
  on(InscripcionActions.cargarCursosOptions, (state) => {
    return {
      ...state,
      cursosOptions: [...CURSOS_DB]
    }
  }),
  on(InscripcionActions.cargarAlumnosOptions, (state) => {
    return {
      ...state,
      usuariosOptions: [...USUARIOS_DB]
    }
  }),
  on(InscripcionActions.crearInscripcion, (state, action) => {
    return {
      ...state,
      inscripciones: [...state.inscripciones, {id: generarIdRandom(4), idCurso: action.idCurso, idUsuario: action.idUsuario}]
    }
  }),
  
);

export const inscripcionFeature = createFeature({
  name: inscripcionFeatureKey,
  reducer,
});

