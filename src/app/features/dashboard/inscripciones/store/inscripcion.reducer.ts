import { createFeature, createReducer, on } from '@ngrx/store';
import { InscripcionActions } from './inscripcion.actions';
import { Inscripcion } from './modelos';

export const inscripcionFeatureKey = 'inscripcion';

const INCRIPCIONES_DB: Inscripcion[] = [{id:"reaf",idUsuario:"45fa",idCurso:"dasr",}]

export interface State {
  inscripciones: Inscripcion[];
}

export const initialState: State = {
  inscripciones: []
};

export const reducer = createReducer(
  initialState,
  on(InscripcionActions.cargarInscripcions, state => {
    return {
      ...state,
      inscripciones: [...INCRIPCIONES_DB]
    }
  }),

);

export const inscripcionFeature = createFeature({
  name: inscripcionFeatureKey,
  reducer,
});

