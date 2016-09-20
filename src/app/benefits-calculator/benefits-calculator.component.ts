import { Component, OnInit } from '@angular/core';
declare var Materialize:any;
declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'app-benefits-calculator',
  templateUrl: 'benefits-calculator.component.html',
  styleUrls: ['benefits-calculator.component.css']
})
export class BenefitsCalculatorComponent implements OnInit {
  ben = {}
  constructor() {
    this.ben = {}
  }

  ngOnInit() {
  }

}
