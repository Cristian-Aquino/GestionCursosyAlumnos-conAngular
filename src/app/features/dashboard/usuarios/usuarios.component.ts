import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogComponent } from './usuario-dialog/usuario-dialog.component';
import { Usuario } from './modelos';
import { filter } from 'rxjs';

const ELEMENT_DATA: Usuario[] = [
  {id: 'Av1d', nombre: 'Silvana', apellido: 'Pepita', email:'silvana_pepita@gmail.com', fecha_creado: new Date()}
];

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'email', 'fecha_creado', 'acciones'];
  dataSource = ELEMENT_DATA;

  usuario ={
    nombre: 'Carlos',
    apellido: 'Beltran'
  }

  constructor(private matDialog: MatDialog) {}

  eliminar(id: string) {
    this.dataSource = this.dataSource.filter((usuario) => usuario.id !== id);
  }

  abrirModal(usuarioEditado?: Usuario): void{
    this.matDialog.open(UsuarioDialogComponent, {data: {usuarioEditado,}},)
      .afterClosed()
      .subscribe({
        next: (resultado) => {
          console.log('Recibimos: ', resultado);

          if(!!resultado){
            if(usuarioEditado){
              this.dataSource = this.dataSource.map((usuario) => usuario.id === usuarioEditado.id ? {...usuario, ...resultado} : usuario)
            }
            else{
              this.dataSource = [...this.dataSource, resultado,]
            }
            
          }
        }
      });
  }

}

