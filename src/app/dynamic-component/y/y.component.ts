import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-y',
  templateUrl: './y.component.html',
  styleUrls: ['./y.component.scss']
})
export class YComponent implements OnInit {
  @Input() tabName;
  @Input() id;
  @Output() yTabName   = new EventEmitter()
  constructor() { }
  tabData:string='';
  data:string='';

  ngOnInit(): void {
  }

  submitJson(){
    let data={
      id:this.id,
      name:this.tabData
    }
    this.yTabName.emit(data);
  }
}
