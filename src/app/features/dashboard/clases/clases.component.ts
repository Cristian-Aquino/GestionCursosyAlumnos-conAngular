import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../../../core/servicios/clases.service';
import { MatDialog } from '@angular/material/dialog';
import { Clase } from './modelos';
import { ClasesDialogComponent } from './clases-dialog/clases-dialog.component';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.scss'
})
export class ClasesComponent implements OnInit{
  displayedColumns = ['id', 'tema', 'duracion', 'acciones'];
  clases: Clase[] = [];

  constructor(
    private clasesServicio: ClasesService,
    private matDialog: MatDialog, 
  ) {}

  ngOnInit(): void {
    this.cargarClases();
  }

  cargarClases(): void{
    this.clasesServicio.getClases().subscribe({
      next: (clases) => {
        this.clases = clases;
      }
    })
  }

  abrirModal(claseEditado?: Clase): void{
    this.matDialog.open(ClasesDialogComponent, {data: {claseEditado,}},)
      .afterClosed()
      .subscribe({
        next: (resultado) => {
          console.log('Recibimos: ', resultado);

          if(!!resultado){
            if(claseEditado){
              this.handleActualizar(claseEditado.id, resultado);
            }
            else{
              this.clases = [...this.clases, resultado,];
              this.clasesServicio.crearClase(resultado);
            }
            
          }
        }
      });
  }

  handleActualizar(id: string, actualizar: Clase): void {
    //this.estaCargando = true;
    this.clasesServicio.actualizarClasePorId(id, actualizar).subscribe({
      next: (clases) => {
        this.clases = clases;
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
    this.clasesServicio.removerClasePorId(id).subscribe({
      next: (clases) => {
        this.clases = clases;
      }
    })
  }

}
