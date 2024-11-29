import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionActions } from './store/inscripcion.actions';
import { Observable } from 'rxjs';
import { Inscripcion } from './store/modelos';
import { selectCargarInscripcionesError, selectCursoOptions, selectEstaCargandoInscripciones, selectInscripciones, selectUsuarioOptions } from './store/inscripcion.selectors';
import { Curso } from '../cursos/modelos';
import { Usuario } from '../usuarios/modelos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent implements OnInit{
  inscripciones$: Observable<Inscripcion[]>;
  cursosOptions$: Observable<Curso[]>;
  usuariosOptions$: Observable<Usuario[]>;
  cargarInscripcinesError$: Observable<Error | null>;
  estaCargandoInscripciones$: Observable<boolean>;

  inscripcionForm: FormGroup;
  displayedColumns: string[] = ['id', 'nombreCurso', 'nombreAlumno'];
  dataSource: Inscripcion[] = [];
  estaCargando = false;


  constructor(private store: Store, private formBuilder: FormBuilder){

    this.inscripcionForm = this.formBuilder.group({
      cursoId: [null, [Validators.required]],
      usuarioId: [null, [Validators.required]],
    })
    this.inscripciones$ = this.store.select(selectInscripciones)
    this.cursosOptions$ = this.store.select(selectCursoOptions)
    this.usuariosOptions$ = this.store.select(selectUsuarioOptions)
    this.estaCargandoInscripciones$ = this.store.select(selectEstaCargandoInscripciones)
    this.cargarInscripcinesError$ = this.store.select(selectCargarInscripcionesError)
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
}
