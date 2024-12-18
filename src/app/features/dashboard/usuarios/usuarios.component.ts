import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioDialogComponent } from './usuario-dialog/usuario-dialog.component';
import { Usuario } from './modelos';
import { UsuariosService } from '../../../core/servicios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/servicios/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent implements OnInit{
  columnasTablaUsuarios: string[] = ['id', 'nombre', 'email', 'rol','fecha_creado', 'acciones'];
  columnasTablaAlumnos: string[] = ['id', 'nombre', 'email', 'fecha_creado', 'acciones'];
  dataSource: Usuario[] = [];
  estaCargando = false;
  esAdmin = false;

  authUsuario$: Observable<Usuario | null>
  rolUsuario: string;

  constructor(
    private matDialog: MatDialog, 
    private usuariosService: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authServicio: AuthService
  ) {
    this.authUsuario$ = this.authServicio.authUsuario$;
    this.rolUsuario = this.authServicio.rolUsuario;
  }

  ngOnInit(): void {
    this.cargarUsuarios(this.rolUsuario);
  }

  cargarUsuarios(rolUsuario?: string): void{
    if(rolUsuario == "ADMIN"){
      this.estaCargando = true;
      this.usuariosService.getUsuarios().subscribe({
        next: (usuarios) => {
          this.dataSource = usuarios;
        },
        error: () => {
          this.estaCargando = false;
        },
        complete: () => {
          this.estaCargando = false;
        }})
    }
    else{
      this.estaCargando = true;
      this.usuariosService.getAlumnos().subscribe({
        next: (usuarios) => {
          this.dataSource = usuarios;
        },
        error: () => {
          this.estaCargando = false;
        },
        complete: () => {
          this.estaCargando = false;
        }})
    }
  }

  cargarAlumnos(): void{
    this.estaCargando = true;
    this.usuariosService.getAlumnos().subscribe({
      next: (usuarios) => {
        this.dataSource = usuarios;
      },
      error: () => {
        this.estaCargando = false;
      },
      complete: () => {
        this.estaCargando = false;
      }

    })
  }

  abrirModal(usuarioEditado?: Usuario): void{
    this.matDialog.open(UsuarioDialogComponent, {data: {usuarioEditado,}},)
      .afterClosed()
      .subscribe({
        next: (resultado) => {
          console.log('Recibimos: ', resultado);

          if(!!resultado){
            if(usuarioEditado){
              this.handleActualizar(usuarioEditado.id, resultado);
            }
            else{
              this.usuariosService.crearUsuario(resultado).subscribe({
                next: () => this.cargarUsuarios()
              });
            }
          }
        },
        error: (error) => {
          console.log(error)
         }
      });
  }

  handleActualizar(id: string, actualizar: Usuario): void {
    this.estaCargando = true;
    this.usuariosService.actualizarUsuarioPorId(id, actualizar).subscribe({
      next: (usuarios) => {
        this.dataSource = usuarios;
      },
      error: () => {
       this.estaCargando = false; 
      },
      complete: () => {
        this.estaCargando = false; 
      }
    })
  }

  eliminar(id: string) {
    this.estaCargando = true;
    this.usuariosService.removerUsuarioPorId(id).subscribe({
      next: (usuarios) => {
        this.dataSource = usuarios;
      },
      error: () => {
       this.estaCargando = false; 
      },
      complete: () => {
        this.estaCargando = false; 
      }
    })
  }

  mostrarDetalles(id: string): void{
    this.router.navigate([id, 'detalle'], {relativeTo: this.activatedRoute})
  }
}

