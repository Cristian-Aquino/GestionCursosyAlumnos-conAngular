import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { InscripcionActions } from './store/inscripcion.actions';
import { Observable } from 'rxjs';
import { Inscripcion } from './store/modelos';
import { selectInscripciones } from './store/inscripcion.selectors';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.scss'
})
export class InscripcionesComponent implements OnInit{
  inscripciones$: Observable<Inscripcion[]>;

  constructor(private store: Store){
    this.inscripciones$ = this.store.select(selectInscripciones)
  }
  
  ngOnInit(): void {
    this.store.dispatch(InscripcionActions.cargarInscripcions());
  }
}
