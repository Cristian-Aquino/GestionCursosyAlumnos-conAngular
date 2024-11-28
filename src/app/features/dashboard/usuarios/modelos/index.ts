export interface Usuario{
    id: string,
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    token: string,
    fecha_creado: Date,
    rol: string
}