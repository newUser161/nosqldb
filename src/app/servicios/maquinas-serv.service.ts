import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Componente } from '../interfaces/componentes';
import  {Maquina } from '../interfaces/maquinas'

@Injectable({
  providedIn: 'root'
})
export class MaquinasServService {
  constructor(private firestore: Firestore) {} 
  getMaquinas(): Observable<Maquina[]>{
    const maquinaRef = collection(this.firestore,'maquinas');            
    return collectionData(maquinaRef,{ idField: 'id' }) as Observable<Maquina[]>;
  };

  getComponentes(): Observable<Componente[]>{
    const componenteRef = collection(this.firestore,'componentes');            
    return collectionData(componenteRef,{ idField: 'id' }) as Observable<Componente[]>;
  };
}