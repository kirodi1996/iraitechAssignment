import { Component, OnInit } from '@angular/core';
import { YComponent } from '../y/y.component';

@Component({
  selector: 'app-x-component',
  templateUrl: './x-component.component.html',
  styleUrls: ['./x-component.component.scss']
})
export class XComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dynamicDashboard=[]
  addY(){
   this.dynamicDashboard.push({componentType:YComponent})
  }
    
}
