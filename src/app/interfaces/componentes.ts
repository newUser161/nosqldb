export interface Componente {
    id:string;
    Tipo:string;
    Marca:string;
    Modelo:string;
    numSerie: string;
    Estado: {
        Nuevo: boolean;
        Usado: boolean;
        Malo: boolean;
    };
    
    Historial: string;
}
