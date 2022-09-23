import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public titleParent: string = 'Liste des commandes';

  // créer ici une propriété pour stocker data
  public collectionParent!: Order[];

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
    this.ordersService.collection.subscribe((data) => {
      console.log(data);
      this.collectionParent = data;
      console.log(this.collectionParent);
    });
  }

  ngOnInit(): void {}
}
