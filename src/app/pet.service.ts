import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Pet } from './pet.model';
import { environment } from '../environments/environment';

@Injectable()
export class PetService {
  constructor (private http: HttpClient) {
  }
  getAvailablePets() {
     return this.http.get<Pet[]>(environment.list);
  }

  addNewPet(petInput: Pet) {
    return this.http.post<Pet>(environment.create, petInput);
  }

  deletePet(id) {
    return this.http.delete<Pet>(environment.delete + id);
  }
}
