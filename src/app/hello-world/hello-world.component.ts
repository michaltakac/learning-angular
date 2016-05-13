import {Component} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `<input (keyup)="updateModel(input.value)" #input>{{model.message}}`
})
export class HelloWorld {

  model = {
    message: 'Hello World!'
  };

  updateModel(newMessage: string) {
    this.model.message = newMessage;
  }
}
