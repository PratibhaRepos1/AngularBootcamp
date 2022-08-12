import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string | undefined;
  date!: string;
  amount!: number;
  height!: number;
  miles!: number;

  car: Object = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  }

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  onMilesChange(event:any) {
    const value = event.target.value;
    this.miles = parseFloat(value);
  }

  onHeightChange(event:any) {
    const value = event.target.value;
    this.height = parseFloat(value);
  }

  onNameChange(event:any) {
    const value = event.target.value;
    this.name = value;
  }

  onDateChange(event:any) {
    const value = event.target.value;
    this.date = value;
  }

  onAmountChange(event:any) {
    const value = event.target.value;
    this.amount = parseFloat(value);
  }
}
