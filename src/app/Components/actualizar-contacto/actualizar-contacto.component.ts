import { Component, OnInit, Inject } from '@angular/core';

import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MAT_DATE_FORMATS } from '@angular/material/core';
import * as moment from 'moment';

import { Contacto } from 'src/app/Interfaces/contacto';
import { Grupo } from 'src/app/Interfaces/grupo';
import { ContactoService } from 'src/app/Services/contacto.service';
import { inject } from '@angular/core/testing';
import { GrupoService } from 'src/app/Services/grupo.service';


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-actualizar-contacto',
  templateUrl: './actualizar-contacto.component.html',
  styleUrls: ['./actualizar-contacto.component.css'],

  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }],
})
export class ActualizarContactoComponent implements OnInit {
  formContacto: FormGroup;
  tituloAccion: string = 'Editar';
  botonAccion: string = 'Actualizar';
  listaGrupos: Grupo[] = [];

  constructor(
    private dialogoReferencia: MatDialogRef<ActualizarContactoComponent>,
    private fb: FormBuilder,
    private _contactoService: ContactoService,
    private _grupoService: GrupoService,

    @Inject(MAT_DIALOG_DATA) public dataContacto: Contacto
  ) {
    this.formContacto = this.fb.group({
      nombreCompleto: [',Validators.required'],
      telefono: [',Validators.required'],
      idGrupo: [',Validators.required'],
      fechaCreacion: [',Validators.required'],
    });

    this._grupoService.getList().subscribe({
      next: (data) => {
        this.listaGrupos = data;
      },
      error: (e) => {},
    });
  }

  ActualizarContacto(){
    const modelo: Contacto = {
      idContacto: 0,
      nombreCompleto: this.formContacto.value.nombreCompleto,
      telefono: this.formContacto.value.telefono,
      idGrupo: this.formContacto.value.idGrupo,
      fechaCreacion: moment(this.formContacto.value.fechaCreacion).format(
        'DD/MM/YYYY'
      ),
    };

    this._contactoService.update(this.dataContacto.idGrupo, modelo).subscribe({
      next: (data) => {},
      error: (e) => {},
    });
  }

  ngOnInit(): void {
    if (this.dataContacto) {
      this.formContacto.patchValue({
        nombreCompleto: this.formContacto.value.nombreCompleto,
        telefono: this.formContacto.value.telefono,
        idGrupo: this.formContacto.value.idGrupo,
        fechaCreacion: moment(this.formContacto.value.fechaCreacion).format(
          'DD/MM/YYYY'
        ),
      });
    }
  }
}
