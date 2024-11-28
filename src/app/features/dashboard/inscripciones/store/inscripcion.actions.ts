import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const InscripcionActions = createActionGroup({
  source: 'Inscripcion',
  events: {
    'Cargar Inscripcions': emptyProps(),
    'Cargar Cursos Options': emptyProps(),
    'Cargar Alumnos Options': emptyProps(),
    
  }
});
