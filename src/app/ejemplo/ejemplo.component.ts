import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo', 
  template: '<h1>Hola COMO ESTAS {{  nombre }}</h1>',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent {
  nombre: string = 'Usuario';
}
