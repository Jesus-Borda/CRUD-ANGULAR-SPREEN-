import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer [] = [];
  constructor(
    private customerService : CustomerService,
    private router: Router,
    
  ) { }
  
  ngOnInit(): void {
    //LO que se hace en el ngOnInit es llamar al metodo a penas se carga el componente
    //  listCustomers que a su vez llama al metodo getCustomerList del servicio CustomerService,
    //  que devuelve un Observable de tipo Customer[], es decir,
    //  un Observable que emite un array de Customer. Luego, 
    // se subscribe al Observable para obtener los datos y 
    // asignarlos a la variable customers.
    this.listCustomers();
  }
  listCustomers(){
    this.customerService.getCustomerList().subscribe(
      data =>{ 
        this.customers = data;
        //console.log(data);
        console.log(this.customers);
      }

    );
  }
  deleteCustomer(id: number|undefined): void {
    console.log(id),
    this.customerService.deleteCustomerById(id).subscribe(
       //Esto es para imprimir la respuesta de la API despues de eliminar un cliente,
      //Esto hace que se refresque la lista de clientes despues de eliminar un cliente,
      ()=> this.listCustomers()
    );

    
  }
  editCustomer(id: number|undefined): void {
      console.log(id);
      this.router.navigate(['/customers/edit', id]);
    
  }

}
