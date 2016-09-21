import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class BenefitService {
  constructor(private http:Http) {
  }

  getBenefits() {
    return Observable.forkJoin(
      this.http.get('app/data/benefits.json').map(response => response.json())
    );
  }
}
