import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  change: any = Number;
  amounts = {
    totalAmount: 33,
    billNPay: 400000,
    totalSpend: 20000000,
    totalIncome: 39999999,
    totalExpense: 6688385868,
    totalBilling: 7098958483737
  }

  ngOnInit(): void {

  }

}
