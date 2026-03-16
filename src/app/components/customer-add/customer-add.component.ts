import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  id: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  constructor(private customerService: CustomerService) { }
  ngOnInit(): void {

  }

  /*addCustomer(): void {
    this.customerService.createCustomer({
      id:'',
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    }).subscribe(
      data => {
        console.log('Customer created successfully', data);
        // Aquí puedes agregar lógica adicional, como limpiar el formulario o mostrar un mensaje de éxito
      },
      error => {
        console.error('Error creating customer', error);
        // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
      }
    );
    //console.log('Customer added: ', this.id, this.firstName, this.lastName, this.email);
  }*/

}
