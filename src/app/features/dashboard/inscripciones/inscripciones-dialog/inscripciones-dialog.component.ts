import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generarIdRandom } from '../../../../shared/funciones';
import { Inscripcion } from '../store/modelos';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Curso } from '../../cursos/modelos';
import { Usuario } from '../../usuarios/modelos';
import { selectCursoOptions, selectUsuarioOptions } from '../store/inscripcion.selectors';

interface InscripcionDialogData{
  usuarioEditado?: Inscripcion;
}

@Component({
  selector: 'app-inscripciones-dialog',
  templateUrl: './inscripciones-dialog.component.html',
  styleUrl: './inscripciones-dialog.component.scss'
})
export class InscripcionesDialogComponent {
  
  cursosOptions$: Observable<Curso[]>;
  usuariosOptions$: Observable<Usuario[]>;
  inscripcionForm: FormGroup;

  constructor(private store: Store, private matDialogRef: MatDialogRef<InscripcionesDialogComponent>, private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data?: InscripcionDialogData){
    this.inscripcionForm = this.formBuilder.group({
        cursoId: [null, [Validators.required]],
        usuarioId: [null, [Validators.required]],
    });
    this.patchFormValue();
    this.cursosOptions$ = this.store.select(selectCursoOptions)
    this.usuariosOptions$ = this.store.select(selectUsuarioOptions)
  }

  private get estaEditando() {
    return !!this.data?.usuarioEditado;
  }

  patchFormValue() {
    if(this.data?.usuarioEditado){
      this.inscripcionForm.patchValue(this.data?.usuarioEditado);
    }
  }

  guardar(): void {
    if(this.inscripcionForm.invalid){
      this.inscripcionForm.markAllAsTouched();
    }
    else{
      this.matDialogRef.close({...this.inscripcionForm.value, 
                              id: this.estaEditando ? this.data!.usuarioEditado!.id : generarIdRandom(4),})
    }    
  }
}
