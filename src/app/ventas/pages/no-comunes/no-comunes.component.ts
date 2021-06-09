import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
   
  // i18nselect
  nombre: string = "fabian";
  genero: string = "masculino";

  invitacionMapa ={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nplural
  clientes: string[] = ['maria','pedro','juan','leo','josefina'];

  clientesMapa = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos un cliente esperando.',
    '=2' : 'tenemos 2 cliente esperando.',
    'other' : 'tenemos # clientes esperando',
  }

  //  key value pipe
  persona = {
    nombre: 'fabian',
    edad: 32,
    direccion:'concepcion, chile'
  }

  // json pipe
  heroes =[
    {
      nombre: ' superman',
      vuela: true
    },
    {
      nombre: ' batman',
      vuela: false
    },
    {
      nombre: ' aquaman',
      vuela: true
    },

  ]

  // Async pipe
  miObservable = interval(1000); //0,1,2,3

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de la promesa');
    },5000)
  });


  cambiarGenero(){
    switch(this.genero){
      case 'femenino':
        this.genero = 'masculino';
        this.nombre = 'mauricio';
        break;
      default:
        this.genero = 'femenino';
        this.nombre = 'beatriz';
        break;
    }
  }

  eliminarCliente(){
    this.clientes.shift();
  }
}
