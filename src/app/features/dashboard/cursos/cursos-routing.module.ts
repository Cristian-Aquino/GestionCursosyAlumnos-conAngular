import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent
  },
  {
    path: ':id/detalle',
    component: DetalleCursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
