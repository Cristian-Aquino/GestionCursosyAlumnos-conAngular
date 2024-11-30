import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { InscripcionesComponent } from './inscripciones.component';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionEffects } from './store/inscripcion.effects';
import { StoreModule } from '@ngrx/store';
import { inscripcionFeature } from './store/inscripcion.reducer';
import { SharedModule } from '../../../shared/shared.module';
import { InscripcionesDialogComponent } from './inscripciones-dialog/inscripciones-dialog.component';


@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscripcionesRoutingModule,
    StoreModule.forFeature(inscripcionFeature),
    EffectsModule.forFeature([InscripcionEffects])
  ]
})
export class InscripcionesModule { }
