import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dasboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dasboard-item.component.html',
  styleUrl: './dasboard-item.component.css',
  /* host:{
    class:'dashboard-item'
  } */
})
export class DasboardItemComponent {
 // @Input({required:true}) image!: {src: string; alt: string}; //importo un objeto que tiene dos atributos
  //@Input({required:true}) title!: string; //importo el titulo

  image= input.required<{src:string ; alt:string}>();
  title= input.required<string>();
}
