import { Component, OnInit } from '@angular/core';
import {Maquina} from 'src/app/interfaces/maquinas';
import {Componente} from 'src/app/interfaces/componentes';
import { MaquinasServService } from 'src/app/servicios/maquinas-serv.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddMachinesComponent } from '../dialog-add-machines/dialog-add-machines.component';
import { DialogdelMachinesComponent } from '../dialog-del-machines/dialog-del-machines.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']  
})



export class InicioComponent implements OnInit{
  title = 'nosqlDB';      
  maquinas: Maquina[];
  componentes: Componente[];
  checked = true;
  showFloatingButtons = false;
  selectedIDS: string[] = [];
  

  displayedColumnsMaquina: string[] = ['seleccionar','id','marca','modelo', 'monitor', 'RAM', 'tecnico', 'procedimientoID', 'opciones'];  
  displayedColumnsComponentes: string[] = ['id', 'Tipo', 'Marca', 'Modelo', 'numSerie', 'Estado', 'Historial'];

    constructor(private maquinasServicio: MaquinasServService,
                public dialog: MatDialog,
                
    ){
      

    this.maquinas = [{
      id: "",
      marca: "",
      modelo: "",
      monitor: "",
      procedimientoID: "",
      tecnico: "",
      RAM: "",
      expand: false,
      selected: false,
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
  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAddMachinesComponent, {
      width: '700px',
      height: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogDel(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogdelMachinesComponent, {
      width: '400px',
      height: '200px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    
  }

  toggleFloat(maquinas: Maquina) {
    maquinas.expand = !maquinas.expand;
    console.log(maquinas.id);   
  }

  addSelectedID(maquinas: Maquina) { // para obtener la id de la fila seleccionada
    if(!maquinas.expand){      
      this.selectedIDS.push(maquinas.id);
    } else {
      this.selectedIDS.pop();
    }
    //console.log(this.selectedIDS.length);
    this.selectedIDS.forEach(element => {
      
      console.log(element);
      
    });
        
    return this.selectedIDS;    
    
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