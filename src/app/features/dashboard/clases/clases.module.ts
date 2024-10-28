import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ClasesComponent } from './clases.component';
import { DetalleClaseComponent } from './detalle-clase/detalle-clase.component';
import { SharedModule } from '../../../shared/shared.module';
import { ClasesDialogComponent } from './clases-dialog/clases-dialog.component';


@NgModule({
  declarations: [
    ClasesComponent,
    DetalleClaseComponent,
    ClasesDialogComponent
  ],
  imports: [ CommonModule, ClasesRoutingModule, SharedModule ]
})
export class ClasesModule { }
