import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Contacto } from 'src/app/Interfaces/contacto';

@Component({
  selector: 'app-eliminar-contacto',
  templateUrl: './eliminar-contacto.component.html',
  styleUrls: ['./eliminar-contacto.component.css'],
})
export class EliminarContactoComponent implements OnInit {
  constructor(
    private dialogoReferencia: MatDialogRef<EliminarContactoComponent>,

    @Inject(MAT_DIALOG_DATA) public dataContacto: Contacto
  ) {}

  ngOnInit(): void {}

  confirmar_Eliminar() {
    if (this.dataContacto) {
      this.dialogoReferencia.close('eliminar');
    }
  }
}
