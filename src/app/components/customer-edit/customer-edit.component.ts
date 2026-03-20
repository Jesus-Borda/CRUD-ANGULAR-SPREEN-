import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  id?: number;
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.customerService.getCustomerById(id).subscribe(
        data => {
          this.id = data.id;
          this.firstName = data.firstName;
          this.lastName = data.lastName;
          this.email = data.email;
        });

    }

  }
  updateCustomer(): void {
    let customer : Customer = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };
    this.customerService.updateCustomer(customer).subscribe(() => {
      console.log('Customer updated successfully');
      this.router.navigate(['/']);
    }
    );
  }


}
