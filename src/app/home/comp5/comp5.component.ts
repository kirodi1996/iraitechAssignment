import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.scss']
})
export class Comp5Component implements OnInit {

  constructor(private homeService:HomeService) { }
  data:string='';
  ngOnInit(): void {
  }

  Submit(){
      this.homeService.multiCastData(this.data);
  }
}
