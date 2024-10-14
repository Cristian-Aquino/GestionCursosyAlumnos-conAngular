import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../../features/dashboard/usuarios/modelos';

@Pipe({
  name: 'usuarioNombreCompleto'
})
export class UsuarioNombreCompletoPipe implements PipeTransform {

  transform(value: Usuario, transform?: 'uppercase'): string {
    const resultado = value.nombre + ' ' + value.apellido;
    if(transform == 'uppercase'){
      return `${resultado}`.toUpperCase();
    }
    return resultado
  }
}
