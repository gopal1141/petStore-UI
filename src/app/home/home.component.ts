import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private petService: PetService) { }
  pet: Pet;
  ngOnInit() {
    this.petService.getAvailablePets()
    .subscribe(
      (response) => {this.pet = response;},
      (error) => console.log(error)
    );
  }

}
