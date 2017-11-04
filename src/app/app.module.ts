import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { HeaderComponent } from './header/header.component';
import { PetService } from './pet.service';
import { FilterPipe } from './data-filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { HttpsRequestInterceptor } from './interceptor.module';

import { DataTableModule } from "angular2-datatable";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
    HeaderComponent,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule ,
    FormsModule,
    DataTableModule
  ],
  providers: [PetService, { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
