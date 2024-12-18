import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionActions } from './store/inscripcion.actions';
import { Observable } from 'rxjs';
import { Inscripcion } from './store/modelos';
import { selectCargarInscripcionesError, selectCursoOptions, selectEstaCargandoInscripciones, selectInscripciones, selectUsuarioOptions } from './store/inscripcion.selectors';
import { Curso } from '../cursos/modelos';
import { Usuario } from '../usuarios/modelos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InscripcionesService } from '../../../core/servicios/inscripciones.service';
import { InscripcionesDialogComponent } from './inscripciones-dialog/inscripciones-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent implements OnInit{
  inscripciones$: Observable<Inscripcion[] | null>;
  cursosOptions$: Observable<Curso[]>;
  usuariosOptions$: Observable<Usuario[]>;
  cargarInscripcinesError$: Observable<Error | null>;
  estaCargandoInscripciones$: Observable<boolean>;

  inscripcionForm: FormGroup;
  displayedColumns: string[] = ['id', 'nombreCurso', 'nombreAlumno'];
  dataSource: Inscripcion[] = [];
  estaCargando = false;

  constructor(private store: Store, private formBuilder: FormBuilder, private inscripcionServicio: InscripcionesService, private matDialog: MatDialog,){

    this.inscripcionForm = this.formBuilder.group({
      cursoId: [null, [Validators.required]],
      usuarioId: [null, [Validators.required]],
    })
    this.inscripciones$ = this.store.select(selectInscripciones)
    this.cursosOptions$ = this.store.select(selectCursoOptions)
    this.usuariosOptions$ = this.store.select(selectUsuarioOptions)
    this.estaCargandoInscripciones$ = this.store.select(selectEstaCargandoInscripciones)
    this.cargarInscripcinesError$ = this.store.select(selectCargarInscripcionesError)

    this.inscripcionServicio.getInscripciones().subscribe({
      next: (inscripcion) => {
        this.dataSource = inscripcion;
      },
      error: () => {
        this.estaCargando = false;
      },
      complete: () => {
        this.estaCargando = false;
      }
    })
  }

  cargarInscripciones(): void{
    this.inscripcionServicio.getInscripciones().subscribe({
      next: (inscripcion) => {
        this.dataSource = inscripcion;
      },
      error: () => {
        this.estaCargando = false;
      },
      complete: () => {
        this.estaCargando = false;
      }
    })
  }

  ngOnInit(): void {
    this.store.dispatch(InscripcionActions.cargarInscripcions());
    this.store.dispatch(InscripcionActions.cargarCursosYAlumnosOptions());
  }

  onSubmit(): void{
    if(this.inscripcionForm.invalid){
      this.inscripcionForm.markAllAsTouched();
    }
    else{
      this.store.dispatch(InscripcionActions.crearInscripcion(this.inscripcionForm.value))
      this.inscripcionForm.reset();
    }
  }

  abrirModal(usuarioEditado?: Usuario): void{
    this.matDialog.open(InscripcionesDialogComponent, {data: {usuarioEditado,}},)
      .afterClosed()
      .subscribe({
        next: (resultado) => {
          console.log('Recibimos: ', resultado);

          if(!!resultado){
              this.inscripcionServicio.crearInscripcion(resultado).subscribe({
                next: () => this.cargarInscripciones()
              });
          }
        },
        error: (error) => {
          console.log(error)
         }
      });
  }
}
