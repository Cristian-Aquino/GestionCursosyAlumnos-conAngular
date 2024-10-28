import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generarIdRandom } from '../../../../shared/funciones';
import { Clase } from '../modelos';

interface ClaseDialogData{
  claseEditado?: Clase;
}

@Component({
  selector: 'app-clases-dialog',
  templateUrl: './clases-dialog.component.html',
  styleUrl: './clases-dialog.component.scss'
})
export class ClasesDialogComponent {
  claseForm: FormGroup;

  constructor(private matDialogRef: MatDialogRef<ClasesDialogComponent>, private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data?: ClaseDialogData){
    this.claseForm = this.formBuilder.group({
      tema: [null, [Validators.required],],
      duracion: [null, [Validators.required],]
    });
    this.patchFormValue();
  }

  private get estaEditando() {
    return !!this.data?.claseEditado;
  }

  patchFormValue() {
    if(this.data?.claseEditado){
      this.claseForm.patchValue(this.data?.claseEditado);
    }
  }

  guardar(): void {
    if(this.claseForm.invalid){
      this.claseForm.markAllAsTouched();
    }
    else{
      this.matDialogRef.close({...this.claseForm.value, 
                              id: this.estaEditando ? this.data!.claseEditado!.id : generarIdRandom(4)},)
    }
  }
}
