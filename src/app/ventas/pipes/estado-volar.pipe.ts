import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'estadoVolar'
})
export class EstadoVolar implements PipeTransform{

    transform(estado: boolean): string{
     
        return (estado) ? 'vuela': 'no vuela';
        
    }
    
}