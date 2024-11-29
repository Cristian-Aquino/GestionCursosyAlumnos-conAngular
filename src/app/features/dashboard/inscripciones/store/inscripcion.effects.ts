import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, delay, map } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin } from 'rxjs';
import { InscripcionActions } from './inscripcion.actions';
import { InscripcionesService } from '../../../../core/servicios/inscripciones.service';
import { AuthActions } from '../../../../store/actions/auth.actions';
import { Action } from '@ngrx/store';
import { CursosService } from '../../../../core/servicios/cursos.service';
import { UsuariosService } from '../../../../core/servicios/usuarios.service';

@Injectable()
export class InscripcionEffects {
  cargarInscripcions$: Actions<Action<string>>;
  crearInscripcion$: Actions<Action<string>>;
  crearInscripcionSuccess$: Actions<Action<string>>;

  cargarCursosYUsuariosOptions$: Actions<Action<string>>;

  constructor(private actions$: Actions, private inscripcionesServicio: InscripcionesService,
              private cursoServicio: CursosService,
              private usuariosServicio: UsuariosService
  ) {
    this.cargarInscripcions$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(InscripcionActions.cargarInscripcions),
        concatMap((action) => this.inscripcionesServicio.getInscripciones().pipe(
         map((response) => InscripcionActions.cargarInscripcionsSuccess({data: response})),
         catchError((error) => of(InscripcionActions.cargarInscripcionsFailure({ data: error })))
        ))
    );
   });

   this.crearInscripcion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionActions.crearInscripcion),
      concatMap((action) => this.inscripcionesServicio.crearInscripcion({ cursoId: action.cursoId, usuarioId: action.usuarioId}).pipe(
        map((data) => InscripcionActions.crearInscripcionSuccess({ data })),
        catchError((error) => of(InscripcionActions.crearInscripcionFailure({ data: error })))
      ))
    );
   });

   this.crearInscripcionSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionActions.crearInscripcionSuccess),
      map(() => InscripcionActions.cargarInscripcions())
    )
   }),

   this.cargarCursosYUsuariosOptions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(InscripcionActions.cargarCursosYAlumnosOptions),
      concatMap(() => forkJoin([this.cursoServicio.getCursos(), this.usuariosServicio.getUsuarios(),
        ]).pipe(
          map((response) => InscripcionActions.cargarCursosYAlumnosOptionsSucces({
            cursos: response[0],
            usuarios: response[1],
          })),
          catchError((error) => 
          of(InscripcionActions.cargarCursosYAlumnosOptionsFailure({error})))
        ))
    );
   })

  }
}
