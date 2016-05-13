import {Component} from '@angular/core';

const HEROES = [
  {id: 1, name: 'Superman'},
  {id: 2, name: 'Batman'},
  {id: 5, name: 'Batgirl'},
  {id: 4, name: 'Robin'},
  {id: 3, name: 'Flash'},
];

@Component({
  selector: 'ngFor-showcase',
  template: require('./ngFor-showcase.html')
})
export class ngForShowcase {
  heroes = HEROES;
}
