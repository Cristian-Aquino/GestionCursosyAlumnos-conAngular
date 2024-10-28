import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generarIdRandom } from '../../../../shared/funciones';
import { Curso } from '../modelos';

interface CursoDialogData{
  cursoEditado?: Curso;
}

@Component({
  selector: 'app-cursos-dialog',
  templateUrl: './cursos-dialog.component.html',
  styleUrl: './cursos-dialog.component.scss'
})
export class CursosDialogComponent {
  cursoForm: FormGroup;

  constructor(private matDialogRef: MatDialogRef<CursosDialogComponent>, private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data?: CursoDialogData){
    this.cursoForm = this.formBuilder.group({
      nombre: [null, [Validators.required]]
    });
    this.patchFormValue();
  }

  private get estaEditando() {
    return !!this.data?.cursoEditado;
  }

  patchFormValue() {
    if(this.data?.cursoEditado){
      this.cursoForm.patchValue(this.data?.cursoEditado);
    }
  }

  guardar(): void {
    if(this.cursoForm.invalid){
      this.cursoForm.markAllAsTouched();
    }
    else{
      this.matDialogRef.close({...this.cursoForm.value, 
                              id: this.estaEditando ? this.data!.cursoEditado!.id : generarIdRandom(4), 
                              fechaCreacion: this.estaEditando ? this.data!.cursoEditado!.fechaCreacion : new Date()})
    }
  }
}
