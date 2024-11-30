import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasesComponent } from './clases.component';
import { DetalleClaseComponent } from './detalle-clase/detalle-clase.component';

const routes: Routes = [
  {
    path: '',
    component: ClasesComponent
  },
  {
    path: ':id/detalle',
    component: DetalleClaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
