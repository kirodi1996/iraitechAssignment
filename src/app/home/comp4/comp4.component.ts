import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.scss']
})
export class Comp4Component implements OnInit {

  constructor(private homeService:HomeService) { }
  data:Observable<any>
  ngOnInit(): void {
    this.data = this.homeService.multicastData
  }
  

}
