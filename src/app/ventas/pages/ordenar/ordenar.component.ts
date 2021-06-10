import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  mayuscula: boolean = true;
  ordenarPor: string = 'nombre';

  heroes: Heroes[] = [
  {
    nombre:"Superman",
    vuela: true,
    color: Color.azul
  },
  {
    nombre:"Batman",
    vuela: false,
    color: Color.negro
  },
  {
    nombre:"Linterna Verde",
    vuela: true,
    color: Color.verde
  },
  {
    nombre:"Flash",
    vuela: false,
    color: Color.rojo
  },
]

  cambiarMayuscula(){
    this.mayuscula = !this.mayuscula;
  }

  cambiarOrder(valor: string){
    this.ordenarPor = valor;
  }
}
