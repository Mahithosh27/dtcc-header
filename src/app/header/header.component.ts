import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName: string = 'User1';
  selectedPair: string = 'USD-INR';
  selectedPairType: string = 'Major';
  selectedType: string = 'Spot';
  currentDate: string = '18 June 2024';

  pairs = [
    { value: 'USD-INR', label: 'USD-INR' },
    { value: 'EUR-USD', label: 'EUR-USD' },
    { value: 'GBP-USD', label: 'GBP-USD' }
  ];

  pairTypes = [
    { value: 'Major', label: 'Major' },
    { value: 'Minor', label: 'Minor' }
  ];

  types = ['Spot', 'Forward', 'Swap'];
}


