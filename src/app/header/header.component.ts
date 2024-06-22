import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pairs = ['USD-INR', 'EUR-USD', 'GBP-USD'];
  types = ['Spot', 'Forward'];
  accounts = ['Account1', 'Account2', 'Account3'];
  selectedPair = 'USD-INR';
  selectedType = 'Spot';
  selectedAccount = 'Account1';
  date = new Date();

  updateDate(event: any) {
    this.date = event.target.value;
  }
}

