import { Injectable } from '@angular/core';
import { calculateInvestmentResults } from './investment-results';

@Injectable({ providedIn: 'root' })
export class InvestService {
  calculate(
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
  ) {
    return calculateInvestmentResults(
      initialInvestment,
      duration,
      expectedReturn,
      annualInvestment
    );
  }
}
