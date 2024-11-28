import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, concatMap, delay, map } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { InscripcionActions } from './inscripcion.actions';
import { InscripcionesService } from '../../../../core/servicios/inscripciones.service';
import { AuthActions } from '../../../../store/actions/auth.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class InscripcionEffects {
  cargarInscripcions$: Actions<Action<string>>;

  constructor(private actions$: Actions, private inscripcionesServicio: InscripcionesService) {
    this.cargarInscripcions$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(InscripcionActions.cargarInscripcions),
        concatMap((action) => this.inscripcionesServicio.getInscripciones().pipe(
         map((response) => InscripcionActions.cargarInscripcionsSuccess({data: response})),
         catchError((error) => of(InscripcionActions.cargarInscripcionsFailure({ data: error })))
        ))
    );
   });
  }
}
