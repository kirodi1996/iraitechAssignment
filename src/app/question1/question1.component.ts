import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.scss']
})
export class Question1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  index: any;
  value: any;
  findNumber() {
    this.value = this.index % 2 === 0 ? this.index * this.index - 1 : this.index * this.index + 1
  }
}
