import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Contacto } from '../Interfaces/contacto';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  private endpoint: string = environment.endPoint;
  private apirUrl: string = this.endpoint + 'Contacto/';

  constructor(private http: HttpClient) {}

  getList(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(`${this.endpoint}${this.apirUrl}`);
  }

  add(modelo: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(`${this.endpoint}${this.apirUrl}`, modelo);
  }

  update(idContacto: number, modelo: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(
      `${this.endpoint}${this.apirUrl}${idContacto}`,
      modelo
    );
  }

  delete(idContacto: number): Observable<void> {
    return this.http.delete<void>(
      `${this.endpoint}${this.apirUrl}${idContacto}`
    );
  }
}
