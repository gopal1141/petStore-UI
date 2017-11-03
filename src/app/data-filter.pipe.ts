import { Pipe, PipeTransform } from '@angular/core';

import { Pet } from './pet.model';

@Pipe({name : 'filter'})
export class FilterPipe implements PipeTransform {
  transform(pets: Pet[], status : String): Pet[] {
    if (status === 'All')
      return pets;
    else
      return pets.filter(
        pet => (pet.status === status));    
  }
}
