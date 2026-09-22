import { AfterViewInit, Component, ElementRef, EventEmitter, output, Output, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  /* onSubmit(titleElement: HTMLInputElement){
    console.log(titleElement);
    console.dir(titleElement);
    const enteredTitle = titleElement.value;
    console.log('entered title'+enteredTitle);

  } */

  /*   onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
    console.log(title);
    console.log(ticketText);
    form.reset();
  } */

  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  //@Output() add = new EventEmitter();
  add = output<{title:string; text: string}>();
  enteredTitle='';
  enteredText= '';


  onSubmit(title: string, ticketText: string) {
    //console.log(title);
    //console.log(ticketText);
    this.add.emit({ title, text: ticketText });
    this.form().nativeElement.reset();
  }

  ngOnInit(){
    console.log('ONINIT');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit() {
      console.log('AFTER VIEW INIT');
      console.log(this.form().nativeElement);
  }
}
