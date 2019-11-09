import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  variable = '';

guardemosUnValorEnUnaVariable(valor) {
  this.variable = valor;
}
mostrarMensajeEnVariable = true;

ngOnInit() {
  this.queMensajeMostrar();
}

queMensajeMostrar() {
  if (this.mostrarMensajeEnVariable == true) {
    this.guardemosUnValorEnUnaVariable(
      "El valor de la condición es igual a true 👍"
    );
  } else {
    this.guardemosUnValorEnUnaVariable(
      "El valor de la condición es diferente a true!, 👎"
    );
  }
}
}

