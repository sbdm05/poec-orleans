import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

// décorateur
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // urlApi
  private urlApi = environment.urlApi;

  // ici on veut faire un appel http

  // définir une propriété
  private collection$!: Observable<Order[]>;

  constructor(private http: HttpClient) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Order(obj);
        });
      })
    );
  }

  // getter  this.ordersService.collection.subscribe(data=>{})
  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // setter this.collection = valeur
  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  // méthode pour changer l'état(state)
  changeState(item: Order, state: StateOrder): Observable<Order> {
    console.log(item, state, 'depuis la méthode changeState');
    // créer un nouvel objet avec item + state
    const obj = new Order(item);
    console.log(obj, 'nouvel objet');
    // modifier l'état dans obj
    obj.state = state;
    console.log(obj, 'modifié');

    // déclencher update(item)
    return this.update(obj);
  }

  // méthode update(item) appel API
  update(obj: Order): Observable<Order> {
    console.log(obj, 'depuis update');
    // appel API
    // return this.http.put('url/id', obj) obj.id
    return this.http.put<Order>(`${this.urlApi}/orders/${obj.id}`, obj);
  }

  add(item: Order): Observable<Order> {
    // this.http.post('url', item)
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  getItemById(id: number): Observable<Order> {
    // this.http.get('url/id')
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }
}
