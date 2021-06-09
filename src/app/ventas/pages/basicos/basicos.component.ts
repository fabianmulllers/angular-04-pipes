import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string ="fabian";
  nombreUpper: string = "FABIAN";
  nombreCompleto: string = "FabiAn MullEr";

  fecha: Date = new Date();

}
