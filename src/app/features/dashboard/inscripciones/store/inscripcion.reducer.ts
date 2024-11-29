import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionActions } from './inscripcion.actions';
import { Inscripcion } from './modelos';
import { Curso } from '../../cursos/modelos';
import { Usuario } from '../../usuarios/modelos';
import { generarIdRandom } from '../../../../shared/funciones';

export const inscripcionFeatureKey = 'inscripcion';
/*
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
*/
export interface State {
  estaCargandoInscripciones: boolean;
  cargarInscripcionesError: Error | null,
  inscripciones: Inscripcion[];
  cursosOptions: Curso[];
  usuariosOptions: Usuario[];
}

export const initialState: State = {
  estaCargandoInscripciones: false,
  cargarInscripcionesError: null,
  inscripciones: [],
  cursosOptions: [],
  usuariosOptions: [],
};

export const reducer = createReducer(
  initialState,
  on(InscripcionActions.crearInscripcion, state => {
    return {
      ...state,
      estaCargandoInscripciones: true,
    }
  }),
  on(InscripcionActions.cargarInscripcions, state => {
    return {
      ...state,
      estaCargandoInscripciones: true,
    }
  }),
  on(InscripcionActions.cargarInscripcionsSuccess, (state, action) => {
    return {
      ...state,
      inscripciones: action.data,
      cargarInscripcionesError: null,
      estaCargandoInscripciones: false
    }
  }),
  on(InscripcionActions.cargarInscripcionsFailure, (state, action) => {
    return {
      ...state,
      ...initialState,
      cargarInscripcionesError: action.data
      
    }
  }),
  on(InscripcionActions.cargarCursosYAlumnosOptions, (state) => {
    return {
      ...state,
      estaCargandoInscripciones: true,

    }
  }),
  on(InscripcionActions.cargarCursosYAlumnosOptionsSucces, (state, action) => {
    return {
      ...state,
      estaCargandoInscripciones: false,
      cargarInscripcionesError: null,
      cursosOptions: action.cursos,
      usuariosOptions: action.usuarios
    }
  }),
  on(InscripcionActions.cargarCursosYAlumnosOptionsFailure, (state, {error}) => {
    return {
      ...state,
      estaCargandoInscripciones: false,
      cargarInscripcionesError: error,
    }
  })
  /*
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
      inscripciones: [...state.inscripciones, {id: generarIdRandom(4), cursoId: action.cursoId, usuarioId: action.usuarioId}]
    }
  }),
  */
);

export const inscripcionFeature = createFeature({
  name: inscripcionFeatureKey,
  reducer,
});

