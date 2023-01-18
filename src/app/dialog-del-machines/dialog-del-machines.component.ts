import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { MaquinasServService } from '../servicios/maquinas-serv.service';


@Component({
  selector: 'app-dialog-del-machines',
  templateUrl: './dialog-del-machines.component.html',
  styleUrls: ['./dialog-del-machines.component.scss']
})
export class DialogdelMachinesComponent implements OnInit {
  ids: string[] = [];
  constructor(public dialogRef: MatDialogRef<DialogdelMachinesComponent>,
              private maquinasServicio: MaquinasServService
    
    ) {

  }
  ngOnInit(): void {

  }
  async onSubmit() {   
    this.ids.forEach(async element => {
      const response = await this.maquinasServicio.deleteMaquinas(element);          
    });
  }
}
