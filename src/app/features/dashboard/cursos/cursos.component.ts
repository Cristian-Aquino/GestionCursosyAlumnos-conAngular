import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../../core/servicios/cursos.service';
import { Curso } from './modelos';
import { CursosDialogComponent } from './cursos-dialog/cursos-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Usuario } from '../usuarios/modelos';
import { AuthService } from '../../../core/servicios/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit{
  displayedColumns = ['id', 'nombre', 'cantidadClases', 'fechaCreacion', 'acciones'];
  cursos: Curso[] = []

  authUsuario$: Observable<Usuario | null>

  constructor(
    private cursosServicio: CursosService,
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authServicio: AuthService
  ) {
    this.authUsuario$ = this.authServicio.authUsuario$;
  }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos(): void{
    this.cursosServicio.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      },
      error: (error) => {
        console.log(error)
       }
    })
  }

  abrirModal(cursoEditado?: Curso): void{
    this.matDialog.open(CursosDialogComponent, {data: {cursoEditado,}},)
      .afterClosed()
      .subscribe({
        next: (resultado) => {
          if(!!resultado){
            if(cursoEditado){
              this.handleActualizar(cursoEditado.id, resultado);
            }
            else{
              this.cursos = [...this.cursos, resultado,];
              this.cursosServicio.crearCurso(resultado).subscribe({
                next: () => this.cargarCursos()
              });
            }
          }
        },
        error: (error) => {
          console.log(error)
         }
      });
  }

  handleActualizar(id: string, actualizar: Curso): void {
    this.cursosServicio.actualizarCursoPorId(id, actualizar).subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      },
      error: (error) => {
       console.log(error)
      }
    })
  }

  eliminar(id: string) {
    this.cursosServicio.removerCursoPorId(id).subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  mostrarDetalles(id: string): void{
    this.router.navigate([id, 'detalle'], {relativeTo: this.activatedRoute})
  }
}
