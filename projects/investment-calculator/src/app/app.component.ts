import { Component, signal } from '@angular/core';
import { HeaderComponent } from '@invest-components/header/header.component';
import { InvestInputComponent } from '@invest-components/invest-input/invest-input.component';
import { InvestResultsComponent } from '@invest-components/invest-results/invest-results.component';
import { InvestResultModel } from '@invest-models/invest-result.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, InvestInputComponent, InvestResultsComponent],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  investResult = signal<InvestResultModel[]>([]);

  onInvestCalculat(res: InvestResultModel[]) {
    this.investResult.set(res);
  }
}
