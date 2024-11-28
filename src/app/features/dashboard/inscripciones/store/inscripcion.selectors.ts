import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInscripcion from './inscripcion.reducer';

export const selectInscripcionState = createFeatureSelector<fromInscripcion.State>(
  fromInscripcion.inscripcionFeatureKey
);


export const selectInscripciones = createSelector(
  selectInscripcionState,
  (state) => state.inscripciones
);

export const selectCursoOptions = createSelector(
  selectInscripcionState,
  (state) => state.cursosOptions
);

export const selectUsuarioOptions = createSelector(
  selectInscripcionState,
  (state) => state.usuariosOptions
);

export const selectCargarInscripcionesError = createSelector(
  selectInscripcionState,
  (state) => state.cargarInscripcionesError
);

export const selectEstaCargandoInscripciones = createSelector(
  selectInscripcionState,
  (state) => state.estaCargandoInscripciones
);