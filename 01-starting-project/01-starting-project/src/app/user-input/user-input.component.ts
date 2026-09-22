import { Component , EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-results/investment-results.model';
import { InvestmentService } from '../inverstment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment='0';
  enteredAnnualInvestment='0';
  enteredExpectedReturn='5';
  enteredDuration='10';

  constructor(private inventementService: InvestmentService){ }


  onSubmit(){
    this.inventementService.calculateInvestmentResults({
      initialInvestment:+this.enteredInitialInvestment, //el + convierte el string en un numero
      annualInvestment: +this.enteredAnnualInvestment, 
      expectedReturn: +this.enteredExpectedReturn, 
      duration:+this.enteredDuration
    });
  }

}
