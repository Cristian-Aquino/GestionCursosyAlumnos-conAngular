import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from '../../../shared/shared.module';
import { UsuarioDialogComponent } from './usuario-dialog/usuario-dialog.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioDialogComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    CommonModule, UsuariosRoutingModule, SharedModule ],
  exports: [UsuariosComponent]
})
export class UsuariosModule { }
