import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  nombre = 'Carlos';
  miArreglo: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  pi = Math.PI;
  title = 'spa';
  salario = 1234.5
  userLang = navigator.language;

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llegó la data');
    }, 3500);
  });

  fecha = new Date();
  nombre2 = 'Hola cOmo  ESStan toDos';

  video = 'TqnlZ79KYZ8';

  contrasenna = '123456';
  activar = true;
  constructor() {
    // alert ("The language is: " + this.userLang);
  }

}
