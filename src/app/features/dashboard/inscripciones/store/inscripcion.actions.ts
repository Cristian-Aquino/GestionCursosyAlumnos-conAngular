import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscripcion } from './modelos';

export const InscripcionActions = createActionGroup({
  source: 'Inscripcion',
  events: {
    'Cargar Inscripcions': emptyProps(),
    'Cargar Inscripcions Success': props<{ data: Inscripcion[] }>(),
    'Cargar Inscripcions Failure': props<{ data: Error }>(),
    'Cargar Cursos Options': emptyProps(),
    'Cargar Alumnos Options': emptyProps(),
    'Crear Inscripcion': props<{idCurso: string, idUsuario: string}>(),
  }
});
