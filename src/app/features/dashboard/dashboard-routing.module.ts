import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then((modulo) => modulo.InicioModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then((modulo) => modulo.UsuariosModule)
  },
  {
    path: 'clases',
    loadChildren: () => import('./clases/clases.module').then((modulo) => modulo.ClasesModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then((modulo) => modulo.CursosModule)
  },
  {
    path: 'inscripciones',
    loadChildren: () => import('./inscripciones/inscripciones.module').then((modulo) => modulo.InscripcionesModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
