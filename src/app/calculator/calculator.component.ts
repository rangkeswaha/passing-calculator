import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

parentMessage: string = "Parent Says Hello!!!!";
showMessageFromChild(message: any) {
   this.messageFromChild = message;
}

  ngOnInit() {
  }

}