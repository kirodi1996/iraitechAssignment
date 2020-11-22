
import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { XComponent } from './x-component/x-component.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic-component.component.html'
})
export class DynamicDashboard {
    @ViewChild ('container', { read: ViewContainerRef }) dynamic:ViewContainerRef;
    dynamicDashboard=[];
    constructor(private componentFactoryResolver:ComponentFactoryResolver){}
    AddX(){
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(XComponent);

        // add the component to the view
        const componentRef = this.dynamic.createComponent(componentFactory);
        //this.dynamicDashboard.push({componentType:XComponent})
    }
}
