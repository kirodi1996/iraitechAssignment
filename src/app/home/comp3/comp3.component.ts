import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  constructor(private homeService:HomeService) { }
  data:Observable<any>
  ngOnInit(): void {
    this.data = this.homeService.multicastData
  }
}
