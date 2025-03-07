import { Component, input } from '@angular/core';
import { InvestResultModel } from '@invest-models/invest-result.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-invest-results',
  imports: [CurrencyPipe],
  templateUrl: './invest-results.component.html',
  styleUrl: './invest-results.component.css',
})
export class InvestResultsComponent {
  investResults = input.required<InvestResultModel[]>();
}
