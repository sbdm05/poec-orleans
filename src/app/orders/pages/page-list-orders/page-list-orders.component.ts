import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  // déclarer une propriété pour stocker stateOrders
  // il faut le transformer en tableau !
  // Object.values est une méthode JS
  public states = Object.values(StateOrder);

  public titleParent: string = 'Liste des commandes';

  // créer ici une propriété pour stocker data
  public collection$!: Observable<Order[]>;

  // créer un tableau avec les en-têtes
  // envoyer headers à app-table-light + verifier
  public headers: string[] = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  constructor(private ordersService: OrdersService) {
    // déclencher le getter
    // remplacer le .subscribe par le pipe async
    // cela ne devrait rien changer à votre affichage
    // this.ordersService.collection.subscribe((data) => {
    //   console.log(data);
    //   this.collection = data;
    //   console.log(this.collection);
    // });

    this.collection$ = this.ordersService.collection;
  }

  ngOnInit(): void {}

  // créer une méthode pour calculer TotalHT et totalTTC
  // remplacé par le pipe total
  // public total(val: number, coef: number, tva?: number) {
  //   console.log('fonction total');
  //   if (tva) {
  //     return val * coef * (1 + tva / 100);
  //   }
  //   return val * coef;
  // }
}
