import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hasil',
  templateUrl: './hasil.component.html',
  styleUrls: ['./hasil.component.css']
})
export class HasilComponent implements OnInit {

  constructor() { }

  @Input() message: string;
@Output() childMessage = new EventEmitter<string&gt;();
updateParent() {
   this.childMessage.emit('Hello! My Parent !!!');
 }
  ngOnInit() {
  }

}