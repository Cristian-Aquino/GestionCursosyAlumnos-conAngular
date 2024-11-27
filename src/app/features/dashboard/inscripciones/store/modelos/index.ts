import { Curso } from "../../../cursos/modelos";
import { Usuario } from "../../../usuarios/modelos";

export interface Inscripcion{
    id: string,
    idUsuario: string,
    idCurso: string,
    usuario?: Usuario,
    curso?: Curso
}