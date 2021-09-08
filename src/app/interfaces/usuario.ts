export interface Usuario {
    nombre?:string,
    apellido_paterno?:string,
    apellido_materno?:string,
    activo?:boolean,
    edad?:number,
    fecha_registro?:Date

    // ? nos ayuda en el contructor a solo igualar = {}

}
