import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscripcion } from './modelos';
import { Curso } from '../../cursos/modelos';
import { Usuario } from '../../usuarios/modelos';

export const InscripcionActions = createActionGroup({
  source: 'Inscripcion',
  events: {
    'Cargar Inscripcions': emptyProps(),
    'Cargar Inscripcions Success': props<{ data: Inscripcion[] }>(),
    'Cargar Inscripcions Failure': props<{ data: Error }>(),
    'Crear Inscripcion': props<{cursoId: string, usuarioId: string}>(),
    'Crear Inscripcion Success': props<{data: Inscripcion}>(),
    'Crear Inscripcion Failure': props<{data: Error}>(),

    'Cargar Cursos y Alumnos Options': emptyProps(),
    'Cargar Cursos y Alumnos Options Succes': props<{ cursos: Curso[], usuarios: Usuario[]}>(),
    'Cargar Cursos y Alumnos Options Failure': props<{error: Error}>(),
  }
});
