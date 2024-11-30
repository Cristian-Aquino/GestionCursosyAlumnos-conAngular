import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../../../shared/shared.module';
import { CursosDialogComponent } from './cursos-dialog/cursos-dialog.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursosDialogComponent,
    DetalleCursoComponent
  ],
  imports: [ CommonModule, CursosRoutingModule, SharedModule ]
})
export class CursosModule { }
