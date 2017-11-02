import { Component, OnInit } from '@angular/core';

import { Pet } from '../pet.model';
import { Category } from '../category.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private petService: PetService) { }

  ngOnInit() {
  }

  statusList : Array<String> = ['Available', 'Pending', 'Sold'];
  pet: Pet = new Pet(null, null, null, null, null);
  categoryList: Category[] = [{id: '1', description:'Dog'},{id: '2', description:'Cat'},{id: '3', description:'Bird'}];
  success : boolean = false;
  clicked : boolean = false;
  // selectedStatus : String = null;
  //
  // selectedItem(selectedStatus) {
  //   this.selectedStatus = selectedStatus;
  // }

  addPet() {
    this.petService.addNewPet(this.pet).subscribe(
      (response) => {
        this.clicked = true;
        this.pet = response;
        this.success = true;
      },
      (error) => {
        console.log(error);
        this.success = false;
        this.clicked = true;
      }
    );
  }

}
