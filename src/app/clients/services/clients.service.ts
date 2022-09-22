import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  // propriété pour stocker le résultat de l'appel
  private collection$!: Observable<Client[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>('http://localhost:4002/clients');
  }

  // getter
  // dans page-list-clients on appelle this.clientsService.collection.subscribe()
  get collection(): Observable<Client[]> {
    return this.collection$;
  }

  // setter
  set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }
}
