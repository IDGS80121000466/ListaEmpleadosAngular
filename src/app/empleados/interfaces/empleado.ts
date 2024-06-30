export interface IEmpleado{
    numEmpleado: number;
    nombre: string;
    correo: string;
    telefono: string;
    fechaNacimiento: Date;
    sexo: Sexo;
}
export enum Sexo {
    Masculino = "Masculino",
    Femenino = "Femenino",
    Otro = "Otro"
}