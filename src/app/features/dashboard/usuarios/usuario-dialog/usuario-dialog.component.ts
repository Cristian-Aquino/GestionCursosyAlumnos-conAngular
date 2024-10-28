import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { generarIdRandom } from '../../../../shared/funciones';
import { Usuario } from '../modelos';

interface UserDialogData{
  usuarioEditado?: Usuario;
}

@Component({
  selector: 'app-usuario-dialog',
  templateUrl: './usuario-dialog.component.html',
  styleUrl: './usuario-dialog.component.scss'
})
export class UsuarioDialogComponent {
  
  usuarioForm: FormGroup;

  constructor(private matDialogRef: MatDialogRef<UsuarioDialogComponent>, private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data?: UserDialogData){
    this.usuarioForm = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      apellido: [null, [Validators.required]],
      email: [null, [Validators.required]]
    });
    this.patchFormValue();
  }

  private get estaEditando() {
    return !!this.data?.usuarioEditado;
  }

  patchFormValue() {
    if(this.data?.usuarioEditado){
      this.usuarioForm.patchValue(this.data?.usuarioEditado);
    }
  }

  guardar(): void {
    if(this.usuarioForm.invalid){
      this.usuarioForm.markAllAsTouched();
    }
    else{
      this.matDialogRef.close({...this.usuarioForm.value, 
                              id: this.estaEditando ? this.data!.usuarioEditado!.id : generarIdRandom(4), 
                              fecha_creado: this.estaEditando ? this.data!.usuarioEditado!.fecha_creado : new Date()})
    }


    
  }
}
