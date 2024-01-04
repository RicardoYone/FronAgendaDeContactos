import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//FORMULARIO REACTIVO
import {ReactiveFormsModule} from '@angular/forms';

//SOLICITUDES HTTP
import { HttpClientModule } from '@angular/common/http';

//COMPONENTES
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

//ICON
import { MatIconModule } from '@angular/material/icon';

//MODALES
import { MatDialogModule } from '@angular/material/dialog';

//GRILLAS
import { MatGridListModule } from '@angular/material/grid-list';
import { VerContactoComponent } from './Components/ver-contacto/ver-contacto.component';
import { AgregarContactoComponent } from './Components/agregar-contacto/agregar-contacto.component';
import { ActualizarContactoComponent } from './Components/actualizar-contacto/actualizar-contacto.component';
import { EliminarContactoComponent } from './Components/eliminar-contacto/eliminar-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VerContactoComponent,
    AgregarContactoComponent,
    ActualizarContactoComponent,
    EliminarContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //COMPONENTES
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
