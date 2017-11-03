import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filterQuery = "";
  rowsOnPage = 5;
  sortBy = "id";
  sortOrder = "asc";
  pet: Pet[];
  statusList : Array<String> = ['All','Available', 'Pending', 'Sold'];
  selectedStatus : String = 'All';

  constructor(private petService: PetService) { }
  ngOnInit() {
    this.petService.getAvailablePets()
    .subscribe(
      (response) => {this.pet = response;},
      (error) => console.log(error)
    );
  }

  deletePet(id, index) {
    this.petService.deletePet(id).subscribe(
      (response) => {this.pet.splice(index, 1)},
      (error) => (console.log(error))
    );
  }

  onChange(event) {
    this.selectedStatus = event.target.value;
  }

}
