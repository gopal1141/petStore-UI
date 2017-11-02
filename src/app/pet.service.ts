import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Pet } from './pet.model';
import { environment } from '../environments/environment';

@Injectable()
export class PetService {
  constructor (private http: Http) {
  }
  getAvailablePets() {
     return this.http.get(environment.list)
     .map(
       (response : Response) => {
         const pet: Pet[] = response.json();
         return pet;
       }
     );
  }

  addNewPet(petInput: Pet) {
    return this.http.post(environment.create, petInput)
    .map(
      (response : Response) => {
        const pet: Pet = response.json();
        return pet;
      }
    );
  }

  deletePet(id) {
    return this.http.delete(environment.delete + id);
  }
}
