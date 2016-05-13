import {Component} from '@angular/core';

@Component({
  selector: 'color-button',
  template: `
    <div class="color-sample" [style.background]="'red'" [style.width]="'100px'">Color sample</div>

    <button [disabled]="true">Disabled</button>
    <input [required]="true">
  `
})
export class ColorButton {

}
