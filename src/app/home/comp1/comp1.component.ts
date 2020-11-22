import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private homeService:HomeService) { }
  data:Observable<any>
  ngOnInit(): void {
    this.data = this.homeService.multicastData
  }

}
