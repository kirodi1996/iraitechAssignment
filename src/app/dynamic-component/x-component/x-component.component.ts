import { Component, ComponentFactoryResolver, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { YComponent } from '../y/y.component';

@Component({
  selector: 'app-x-component',
  templateUrl: './x-component.component.html',
  styleUrls: ['./x-component.component.scss']
})
export class XComponent {
  @Input()id;
  @ViewChild ('container', { read: ViewContainerRef }) dynamic:ViewContainerRef;
  @Output() tabNameEmit = new EventEmitter();
  dynamicDashboard=[];
  constructor(private componentFactoryResolver:ComponentFactoryResolver){}
  addY(){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(YComponent);
    const componentRef = this.dynamic.createComponent(componentFactory);
    componentRef.instance.tabName = this.name;
    componentRef.instance.yTabName.subscribe(yTabName=>{
      let data={
        id:this.id,
        name:this.tabName
      }
       this.name=this.tabName;
       this.tabNameEmit.emit(data);
    })
  }
  
 
  tabName:string='';
  name:string='';
  submit(){
    
  }
    
}
