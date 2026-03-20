import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private api: string = 'http://localhost:8080/api/customers';
  constructor(
    private http: HttpClient) { }
  getCustomerList(): Observable<Customer[]> {
    //OBservavle es un tipo de dato que se utiliza para manejar datos asincronos,
    //  es decir, datos que pueden llegar en un futuro, como por ejemplo, 
    // una respuesta de una API. En este caso, el metodo getCustomerList devuelve 
    // un Observable de tipo Customer[], es decir, un Observable que emite un array de Customer.
    return this.http.get<Customer[]>(`${this.api}/readAll`);
  }
  createCustomer(customer: Customer): Observable<Customer> {
    // El metodo createCustomer recibe un objeto de tipo Customer
    //  y devuelve un Observable de tipo Customer, 
    // es decir, un Observable que emite un objeto de tipo Customer. 
    return this.http.post<Customer>(`${this.api}`, customer);
  }
  //ES any por que no sabemos si retorna algo o no
  deleteCustomerById(id: number | undefined): Observable<any> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
  getCustomerById(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.api, customer)
  }
  // UPDATE
  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`http://localhost:8080/api/customers/${customer.id}`, customer);
  }

}
