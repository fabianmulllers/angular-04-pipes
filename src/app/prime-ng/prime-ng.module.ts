import { NgModule } from '@angular/core';


import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    ButtonModule,
    CardModule,
    InputTextModule,
    FieldsetModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
