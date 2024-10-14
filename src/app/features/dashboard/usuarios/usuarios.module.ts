import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from '../../../shared/shared.module';
import { UsuarioDialogComponent } from './usuario-dialog/usuario-dialog.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioDialogComponent
  ],
  imports: [
    CommonModule, UsuariosRoutingModule, SharedModule ],
  exports: [UsuariosComponent]
})
export class UsuariosModule { }
