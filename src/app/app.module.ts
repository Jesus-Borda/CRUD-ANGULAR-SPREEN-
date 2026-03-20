import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerAddComponent } from './components/customer-add/customer-add.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';

const routes : Routes = [
  {path: '', component: CustomerListComponent},//http://localhost:4200 -> CustomerListComponent
  // En este caso, se define una ruta con el path 'customers' que se asocia con el componente CustomerListComponent.
  // Esto significa que cuando el usuario navegue a la URL '/customers', se mostrará el componente CustomerListComponent.
  {path: 'customers/add', component: CustomerAddComponent},//http://localhost:4200/customers/add -> CustomerAddComponent
  { path: 'customers/edit/:id', component: CustomerEditComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
