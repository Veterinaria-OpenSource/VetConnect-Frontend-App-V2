import { Pipe, PipeTransform } from '@angular/core';
import { IVetCenter } from '../models/vet-centers/vet-center.entity';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(vetCenters: IVetCenter[], search: string): IVetCenter[]  {
    if (!vetCenters) {
      return [];
    }
    
    if (!search) {
      return vetCenters;
    }

    search = search.toLowerCase();
    return vetCenters.filter(vetCenters => {
      return vetCenters.name.toLowerCase().includes(search);
    });
  }



}
