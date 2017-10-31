import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { HeaderComponent } from './header/header.component';
import { PetService } from './pet.service';

const routes : Routes = [
  {path: '', component:HomeComponent},
  {path: 'add', component:AddComponent},
  {path: 'delete', component:DeleteComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    DeleteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
