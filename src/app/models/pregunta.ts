export interface Pregunta{
    id: number,
    pregunta: string,
    respuestas: Respuesta[],
}

export interface Respuesta{
    titulo: string
    correcta: boolean
}