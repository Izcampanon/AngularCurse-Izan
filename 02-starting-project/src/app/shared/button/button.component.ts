import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[appButton]', //se aplica a todos los botones
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
 // @Input({required:true}) title!: string
  
}
