import { Component, inject, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestService } from '@invest-services/invest.service';
import { InvestResultModel } from '@invest-models/invest-result.model';

@Component({
  selector: 'app-invest-input',
  imports: [FormsModule],
  templateUrl: './invest-input.component.html',
  styleUrl: './invest-input.component.css',
})
export class InvestInputComponent {
  initialInvestment = signal<string>('0');
  duration = signal<string>('0');
  expectedReturn = signal<string>('5');
  annualInvestment = signal<string>('10');

  calculate = output<InvestResultModel[]>();

  investService = inject(InvestService);

  onSubmit() {
    const res = this.investService.calculate(
      parseFloat(this.initialInvestment()),
      parseFloat(this.duration()),
      parseFloat(this.expectedReturn()),
      parseFloat(this.annualInvestment())
    );
    console.log(res);
    this.calculate.emit(res);
  }
}
