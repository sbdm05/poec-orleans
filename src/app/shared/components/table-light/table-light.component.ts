import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
})
export class TableLightComponent implements OnInit {
  // pourquoi ici je ne fais pas un .subscribe ?
  // this.ordersService.collection.subscribe()
  @Input() collection!: any;
  @Input() headers!: string[];

  // déclenché une seule fois
  constructor() {
    console.log(this.collection); // undefined
    console.log(this.headers, 'headers dans constructor'); // undefined
  }

  // déclenché une seule fois
  ngOnInit(): void {
    console.log(this.collection); // undefined
    console.log(this.headers, 'headers dans ngOnInit'); // ???
  }

  // déclenché plusieurs fois
  ngOnChanges() {
    console.log(this.collection, 'test'); // OK
  }
}
