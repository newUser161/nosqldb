import { Component, OnInit } from '@angular/core';
import {Maquina} from 'src/app/interfaces/maquinas';
import {Componente} from 'src/app/interfaces/componentes';
import { MaquinasServService } from 'src/app/servicios/maquinas-serv.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']  
})



export class InicioComponent implements OnInit{
  title = 'nosqlDB';      
  maquinas: Maquina[];
  componentes: Componente[];
  
  
  

  displayedColumnsMaquina: string[] = ['id', 'monitor', 'RAM', 'tecnico', 'procedimientoID'];  
  displayedColumnsComponentes: string[] = ['id', 'Tipo', 'Marca', 'Modelo', 'numSerie', 'Estado', 'Historial'];

  


  constructor(private maquinasServicio: MaquinasServService){

    this.maquinas = [{
      id: "",
      monitor: "",
      procedimientoID: "",
      tecnico: "",
      RAM: "",
    }];

    this.componentes = [{
      id:"",
      Tipo:"",
      Marca:"",
      Modelo:"",
      numSerie: "",
      Estado: {
        Nuevo: false,
        Usado: false,
        Malo: true,
      },      
      Historial: ""
    }];
  }

  ngOnInit(): void {
    this.maquinasServicio.getMaquinas().subscribe(maquinas => {
      this.maquinas = maquinas;                  
    });

    this.maquinasServicio.getComponentes().subscribe(componentes => {
      this.componentes = componentes;     
      

      /*
      componentes.forEach(element => {
        Object.entries(element.Estado).find(([key, value]) =>{
        if (value === true){
          this.estadoComp = key; 
          this.arraytest.push(key);                   
          return true;          
        } else {
          return false;
        }
          
        });        
      });     
      */

      console.log(componentes);                   
    });
  }  


  
}





