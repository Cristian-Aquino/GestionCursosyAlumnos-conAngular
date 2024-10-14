import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { UsuarioNombreCompletoPipe } from './pipes/usuario-nombre-completo.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { RepetirDirective } from './directives/repetir.directive';

@NgModule({
  declarations: [
    UsuarioNombreCompletoPipe,
    ResaltadoDirective,
    RepetirDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatDialogModule, ReactiveFormsModule,
    MatTableModule, UsuarioNombreCompletoPipe, ResaltadoDirective, RepetirDirective
  ]
})
export class SharedModule { }
