import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../../core/servicios/cursos.service';
import { Curso } from './modelos';
import { CursosDialogComponent } from './cursos-dialog/cursos-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit{
  displayedColumns = ['id', 'nombre', 'fechaCreacion', 'acciones'];
  cursos: Curso[] = []

  constructor(
    private cursosServicio: CursosService,
    private matDialog: MatDialog, 
  ) {}

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos(): void{
    this.cursosServicio.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
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
              this.cursosServicio.crearCurso(resultado);
            }
          }
        }
      });
  }

  handleActualizar(id: string, actualizar: Curso): void {
    //this.estaCargando = true;
    this.cursosServicio.actualizarCursoPorId(id, actualizar).subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      },
      error: () => {
       //this.estaCargando = false; 
      },
      complete: () => {
        //this.estaCargando = false; 
      }
    })
  }

  eliminar(id: string) {
    this.cursosServicio.removerCursoPorId(id).subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      },
      error: () => {
      },
      complete: () => {
      }
    })
  }
}
