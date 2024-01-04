import { Contacto } from './../../Interfaces/contacto';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactoService } from 'src/app/Services/contacto.service';

import { MatDialog } from '@angular/material/dialog';
import { AgregarContactoComponent } from '../agregar-contacto/agregar-contacto.component';
import { ActualizarContactoComponent } from '../actualizar-contacto/actualizar-contacto.component';
import { EliminarContactoComponent } from '../eliminar-contacto/eliminar-contacto.component';


@Component({
  selector: 'app-ver-contacto',
  templateUrl: './ver-contacto.component.html',
  styleUrls: ['./ver-contacto.component.css'],
})
export class VerContactoComponent implements OnInit {
  displayedColumns: string[] = [
    'nombreCompleto',
    'telefono',
    'nombreGrupo',
    'fechaCreacion',
  ];
  dataSource = new MatTableDataSource<Contacto>();

  constructor(
    private _contactoService: ContactoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.mostrarContactos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mostrarContactos() {
    this._contactoService.getList().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (e) => {},
    });
  }

  dialogoNuevoContacto() {
    this.dialog
      .open(AgregarContactoComponent, {
        disableClose: true,
        width: '500px',
      })
      .afterClosed()
      .subscribe((resultado) => {
        this.mostrarContactos();
      });
  }

  dialogoEditarContacto(dataContacto: Contacto) {
    this.dialog
      .open(ActualizarContactoComponent, {
        disableClose: true,
        width: '500px',
        data: dataContacto,
      })
      .afterClosed()
      .subscribe((resultado) => {
        this.mostrarContactos();
      });
  }

  dialogoEliminarContacto(dataContacto: Contacto) {
    this.dialog
      .open(EliminarContactoComponent, {
        disableClose: true,
        data: dataContacto,
      })
      .afterClosed()
      .subscribe((resultado) => {
        this._contactoService.delete(dataContacto.idContacto).subscribe({
          next: (data) => {},
          error: (e) => {
            console.log(e);
          },
        });
      });
  }
}
