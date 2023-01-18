import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { MaquinasServService } from '../servicios/maquinas-serv.service';


@Component({
  selector: 'app-dialog-add-machines',
  templateUrl: './dialog-add-machines.component.html',
  styleUrls: ['./dialog-add-machines.component.scss']
})
export class DialogAddMachinesComponent implements OnInit {
  formulario: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogAddMachinesComponent>,
              private maquinasServicio: MaquinasServService
    
    ) {
    this.formulario = new FormGroup({
      marca: new FormControl(),
      modelo: new FormControl(),
      monitor: new FormControl(),
      RAM: new FormControl(),      
      tecnico: new FormControl(),      
      procedimientoID: new FormControl(),      
    })


  }
  ngOnInit(): void {

  }
  async onSubmit() {   
    this.formulario.controls['tecnico'].setValue("YoMismo");
    this.formulario.controls['procedimientoID'].setValue(1);
    const response = await this.maquinasServicio.addMaquinas(this.formulario.value);    
  }
}
