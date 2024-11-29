import { Curso } from "../../../cursos/modelos";
import { Usuario } from "../../../usuarios/modelos";

export interface Inscripcion{
    id: string,
    cursoId: string,
    usuarioId: string,
    usuario?: Usuario,
    curso?: Curso
}