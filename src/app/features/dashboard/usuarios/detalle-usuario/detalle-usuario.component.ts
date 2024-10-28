import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../../../core/servicios/usuarios.service';
import { Usuario } from '../modelos';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.scss'
})
export class DetalleUsuarioComponent implements OnInit{
  idUsuario?: string;
  usuario?: Usuario;
  estaCargando = false;

  constructor(private activatedRoute: ActivatedRoute, private usuariosServicio: UsuariosService){
    this.idUsuario = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.estaCargando = true;
    this.usuariosServicio.getById(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (usuario) => {
        this.usuario = usuario;
        this.estaCargando = false;
      }
    })
  }
}
