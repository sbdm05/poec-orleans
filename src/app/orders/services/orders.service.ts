import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // ici on veut faire un appel http

  // définir une propriété
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>('http://localhost:4002/orders');
  }

  // getter  this.ordersService.collection.subscribe(data=>{})
  get collection(): Observable<Order[]>{
    return this.collection$;
  }

  // setter this.collection = valeur
  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }
}
