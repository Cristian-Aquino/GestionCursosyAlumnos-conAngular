import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionActions } from './store/inscripcion.actions';
import { Observable } from 'rxjs';
import { Inscripcion } from './store/modelos';
import { selectCursoOptions, selectInscripciones, selectUsuarioOptions } from './store/inscripcion.selectors';
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

  inscripcionForm: FormGroup;


  constructor(private store: Store, private formBuilder: FormBuilder){

    this.inscripcionForm = this.formBuilder.group({
      idCurso: [null, [Validators.required]],
      idUsuario: [null, [Validators.required]],
    })
    this.inscripciones$ = this.store.select(selectInscripciones)
    this.cursosOptions$ = this.store.select(selectCursoOptions)
    this.usuariosOptions$ = this.store.select(selectUsuarioOptions)
  }
  
  ngOnInit(): void {
    this.store.dispatch(InscripcionActions.cargarInscripcions());
    this.store.dispatch(InscripcionActions.cargarCursosOptions());
    this.store.dispatch(InscripcionActions.cargarAlumnosOptions());
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
