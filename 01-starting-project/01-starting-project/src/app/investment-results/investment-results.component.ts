import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, Input } from '@angular/core';
import { InvestmentService } from '../inverstment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
/* 
  /* results = input<{ 
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }>() 

  @Input() results?:{
    
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
  }[];
   */


  //utilizando el servicio
  private investementService= inject(InvestmentService);

  get results(){
    return this.investementService.resultData;
  }
}
