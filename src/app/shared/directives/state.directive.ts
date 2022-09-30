import { Directive, HostBinding, Input } from '@angular/core';

// Décorator !
@Directive({
  selector: '[appState]',
})
export class StateDirective {
  // ??
  @Input() etat!: string; // undefined
  @HostBinding('class') tdClassName!: string;

  // fonction déclenché en tout premier et UNE seule fois
  constructor() {
    //console.log('depuis appState');
    //console.log(this.etat); // undefined
  }

  // déclenché une seule fois
  ngOnInit() {
    //console.log(this.etat, 'depuis ngOnInit'); // toujours la première valeur
  }

  // plusieurs fois
  ngOnChanges(){
    //console.log(this.etat, 'depuis ngOnChanges');
    // ici on peut modifier la classe avec tdClassName = 'nomClasse'

    this.tdClassName = `state-${this.etat.toLowerCase()}`;
    // state.CONFIRMED
    // méthode .toLowerCase()

  }
}

