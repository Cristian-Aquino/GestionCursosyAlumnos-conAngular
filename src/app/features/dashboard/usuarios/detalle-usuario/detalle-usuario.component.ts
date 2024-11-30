import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../../../core/servicios/usuarios.service';
import { Usuario } from '../modelos';
import { Curso } from '../../cursos/modelos';
import { InscripcionesService } from '../../../../core/servicios/inscripciones.service';
import { Inscripcion } from '../../inscripciones/store/modelos';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.scss'
})
export class DetalleUsuarioComponent implements OnInit{
  idUsuario?: string;
  usuario?: Usuario;
  columnasTablaCursos: string[] = ['id', 'Curso', 'accion'];
  dataSource: Curso[] = [];
  estaCargando = false;
  inscripcionesAlumno: Inscripcion[];

  constructor(private activatedRoute: ActivatedRoute, private usuariosServicio: UsuariosService, private inscripcionesServicio: InscripcionesService,){
    this.idUsuario = activatedRoute.snapshot.params['id'];
    this.inscripcionesAlumno = [];
  }

  ngOnInit(): void {
    this.estaCargando = true;
    this.usuariosServicio.getById(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (usuario) => {
        this.usuario = usuario;
        this.estaCargando = false;
      },
      error: (error) => {
        console.log(error)
       }
    })

    this.cargarInscripciones();
  }

  cargarInscripciones(): void{
    this.estaCargando = true;
    this.inscripcionesServicio.getInscripcionesPorAlumno(this.usuario?.id).subscribe({
      next: (inscripciones) => {
        this.inscripcionesAlumno = inscripciones;
      },
      error: () => {
        this.estaCargando = false;
      },
      complete: () => {
        this.estaCargando = false;
      }})
  }

  desinscribir(id: string) {
    this.estaCargando = true;
    this.inscripcionesServicio.eliminarInscripcionPorId(id).subscribe({
      next: (inscripcion) => {
        this.dataSource = inscripcion;
      },
      error: () => {
       this.estaCargando = false; 
      },
      complete: () => {
        this.estaCargando = false; 
      }
    })
  }
}
