import { Component } from '@angular/core';
import { BenefitsCalculatorComponent } from './benefits-calculator/benefits-calculator.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BenefitsCalculatorComponent]
})
export class AppComponent {
  title = 'app works!';
}
