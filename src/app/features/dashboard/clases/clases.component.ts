import { Component, OnInit } from '@angular/core';
import { ClasesService } from '../../../core/servicios/clases.service';
import { MatDialog } from '@angular/material/dialog';
import { Clase } from './modelos';
import { ClasesDialogComponent } from './clases-dialog/clases-dialog.component';
import { Usuario } from '../usuarios/modelos';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../core/servicios/auth.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrl: './clases.component.scss'
})
export class ClasesComponent implements OnInit{
  displayedColumns = ['id', 'tema', 'duracion', 'acciones'];
  clases: Clase[] = [];

  authUsuario$: Observable<Usuario | null>

  constructor(
    private clasesServicio: ClasesService,
    private matDialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authServicio: AuthService
  ) {
    this.authUsuario$ = this.authServicio.authUsuario$;
  }

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
              this.clasesServicio.crearClase(resultado).subscribe({
                next: () => this.cargarClases(),
                error: (error) => {
                  console.log(error);
                }
              });
              
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
  
  mostrarDetalles(id: string): void{
    this.router.navigate([id, 'detalle'], {relativeTo: this.activatedRoute})
  }
}
