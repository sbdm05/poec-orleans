import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  // déclarer une propriété qui vient du parent
  @Input() public init!: Order;
  // transformer l'enum en tableau
  public states = Object.values(StateOrder);

  public error!: string;

  // donner un nom au formulaire
  public form!: FormGroup;

  // evenement disponible à l'export
  @Output() submitted = new EventEmitter<Order>();

  constructor(
    // utilisation de formBuilder pour associer un input à une propriété d'un objet
    private fb: FormBuilder
  ) {
    console.log(this.init); // undefined
  }

  ngOnInit(): void {
    console.log(this.init, 'ngOnInit'); // on obtient bien notre objet
    // associer des valeurs à un objet
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.client, Validators.required],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    console.log(this.form.status, 'validé');
    // la suite ????
    // envoyer la valeur this.form.value au parent
    // vérifier le statut
    // si le statut est strictement égal à VALID alors, on emit, sinon, non
    this.submitted.emit(this.form.value);

    // if (this.form.status === 'VALID') {
    //   this.submitted.emit(this.form.value);
    // } else {
    //   console.log('champ obligatoire');
    //   // string interpolation
    //   this.error = 'champs obligatoires'
    // }
  }
}
