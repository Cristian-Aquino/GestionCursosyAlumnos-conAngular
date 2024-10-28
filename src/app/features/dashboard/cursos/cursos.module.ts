import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../../../shared/shared.module';
import { CursosDialogComponent } from './cursos-dialog/cursos-dialog.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursosDialogComponent
  ],
  imports: [ CommonModule, CursosRoutingModule, SharedModule ]
})
export class CursosModule { }
