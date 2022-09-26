import { Pipe, PipeTransform } from '@angular/core';

// décorateur
@Pipe({
  name: 'total',
})

export class TotalPipe implements PipeTransform {
  transform(item: any, tva?: boolean) {
    // value correspond à la valeur passée au pipe total
    // {{item | total}} HT
    // {{item | total :true }} TTC

    //console.log(item, 'item');
    // ajouter la condition et return val.totalHT ou val.totalTTC
    if (tva) {
      return item.totalTTC();
    }
    return item.totalHT();
  }
}
