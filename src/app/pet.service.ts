import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Pet } from './pet.model';

@Injectable()
export class PetService {
  constructor (private http: Http) {
  }
  getAvailablePets() {
     return this.http.get("http://localhost:8080/pet/list")
     .map(
       (response : Response) => {
         const pet: Pet = response.json();
         return pet;
       }
     );
  }

  addNewPet(petInput: Pet) {
    return this.http.post("http://localhost:8080/pet/create", petInput);
  }
}
