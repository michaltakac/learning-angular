import {Component} from '@angular/core';
import {ngForShowcase} from './ngFor-showcase.component';

@Component({
  selector: 'directives',
  directives: [ngForShowcase],
  template: `<ngFor-showcase></ngFor-showcase>`
})
export class Directives {

}
