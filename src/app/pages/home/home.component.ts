import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  counter: number = 0;

  increment() {
    return ++this.counter;
  }

  decrement() {
    return this.counter <= 0 ? 0 : --this.counter;
  }

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  submit() {
    console.log(this.form.value);
  }
}
