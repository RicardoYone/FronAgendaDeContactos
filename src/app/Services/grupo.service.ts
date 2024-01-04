import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Grupo } from '../Interfaces/grupo';

@Injectable({
  providedIn: 'root',
})
export class GrupoService {
  private endpoint: string = environment.endPoint;
  private apirUrl: string = this.endpoint + 'Grupo/';

  constructor(private http: HttpClient) {}

  getList():Observable<Grupo[]>{
    return this.http.get<Grupo[]>(`${this.endpoint}${this.apirUrl}`);
  }
}
