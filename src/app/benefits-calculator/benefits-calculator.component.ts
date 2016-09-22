import { Component, OnInit, AfterViewInit } from '@angular/core';
import './benefits.json';
declare var Materialize:any;
declare var jQuery:any;

@Component({
  moduleId: module.id,
  selector: 'app-benefits-calculator',
  templateUrl: 'benefits-calculator.component.html',
  styleUrls: ['benefits-calculator.component.css']
})
export class BenefitsCalculatorComponent implements OnInit, AfterViewInit {
  public benefits;

  public calc = {
    employStatus: '',
    insPlan: '',
    coverage: {
      myself: true,
      spouse: false,
      child: false,
      family: false
    },
    wellness: {
      myself: {
        participation: false,
        biometrics: ''
      },
      spouse: {
        participation: false,
        biometrics: ''
      },
      child: {
        participation: false
      }
    }
  }

  public totals = {
    insurance: 0,
    wellness: {
      employee: 0,
      spouse: 0,
      children: 0
    },
    savings: 0,
    total: 0
  }

  constructor() {
    this.benefits = benefitsJSON;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    jQuery(document).ready(function() {
      jQuery('.totals-wrapper').pushpin({ top: jQuery('.totals-wrapper').offset().top });
    });
  }

  doCalc() {
    if(this.calc.employStatus === '' || this.calc.insPlan === ''){
      return;
    }

    var benefits = this.benefits;

    if(this.calc.coverage.myself && this.calc.coverage.spouse && this.calc.coverage.child){
      this.calc.coverage.family = true;
    }

    var plan = benefits.plans[parseInt(this.calc.insPlan)-1];
    var status = this.calc.employStatus;
    var pricing;

    if(status == 'fullTime') {
      pricing = plan.fullTime;
    } else if(status == 'partTime') {
      pricing = plan.partTime;
    }

    this.totals.insurance = pricing.employee;
    this.totals.insurance += this.calc.coverage.spouse ? pricing.spouse : 0;
    this.totals.insurance += this.calc.coverage.child ? pricing.children : 0;
    this.totals.insurance += this.calc.coverage.family ? pricing.family : 0;

    switch(this.calc.wellness.myself.biometrics){
      case "bronze":
        this.totals.wellness.employee = benefits.wellness.bronze;
        break;
      case "silver":
        this.totals.wellness.employee = benefits.wellness.silver;
        break;
      case "gold":
        this.totals.wellness.employee = benefits.wellness.gold;
        break;
      default:
        this.totals.wellness.employee = 0;
    }

    switch(this.calc.wellness.spouse.biometrics){
      case "bronze":
        this.totals.wellness.spouse = benefits.wellness.bronze;
        break;
      case "silver":
        this.totals.wellness.spouse = benefits.wellness.silver;
        break;
      case "gold":
        this.totals.wellness.spouse = benefits.wellness.gold;
        break;
      default:
        this.totals.wellness.spouse = 0;
    }

    this.totals.wellness.children = this.calc.wellness.child.participation ? benefits.wellness.dependents : 0;

    this.totals.savings = this.totals.wellness.employee + this.totals.wellness.spouse + this.totals.wellness.children;

    this.totals.total = this.totals.insurance - this.totals.savings;
  }

  resetCalc(){
    this.calc = {
      employStatus: '',
      insPlan: '',
      coverage: {
        myself: true,
        spouse: false,
        child: false,
        family: false
      },
      wellness: {
        myself: {
          participation: false,
          biometrics: ''
        },
        spouse: {
          participation: false,
          biometrics: ''
        },
        child: {
          participation: false
        }
      }
    }

    this.totals = {
      insurance: 0,
      wellness: {
        employee: 0,
        spouse: 0,
        children: 0
      },
      savings: 0,
      total: 0
    }
  }

}
