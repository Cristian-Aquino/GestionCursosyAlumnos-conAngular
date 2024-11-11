import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/servicios/auth.service';
import { Observable } from 'rxjs';
import { Usuario } from './usuarios/modelos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;

  authUsuario$: Observable<Usuario | null>;

  constructor(private router: Router, private authServicio: AuthService){
    this.authUsuario$ = this.authServicio.authUsuario$;
  }

  logout(): void {
    this.authServicio.logout();
  }

}
