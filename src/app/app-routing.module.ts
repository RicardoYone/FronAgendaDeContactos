import { ActualizarContactoComponent } from './Components/actualizar-contacto/actualizar-contacto.component';
import { AgregarContactoComponent } from './Components/agregar-contacto/agregar-contacto.component';
import { VerContactoComponent } from './Components/ver-contacto/ver-contacto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'verContacto', pathMatch: 'full' },
  { path: 'verContacto', component: VerContactoComponent },
  { path: 'agregarContacto', component: AgregarContactoComponent },
  { path: 'actualizarContacto/:id', component: ActualizarContactoComponent },
  { path: '**', redirectTo: 'verContacto', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
