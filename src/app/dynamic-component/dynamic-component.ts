
import {
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    EventEmitter,
    Injector,
    Input,
    OnChanges,
    Output,
    StaticProvider,
    SimpleChanges,
    Type,
    ViewContainerRef,
    ViewChild,
    ComponentFactory,
} from '@angular/core';


@Component({
    selector: 'ngm-dynamic',
    template: '<ng-template #dynamic></ng-template>',
})
export class DynamicComponent {

    @Input()
    ndcDynamicComponent: Type<any>;
    @ViewChild ('dynamic') dynamic:ViewContainerRef;
    constructor(private componentFactory: ComponentFactoryResolver,private viewContainerRef:ViewContainerRef) {

    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.ndcDynamicComponent) {
            this.createDynamicComponent();
        }
    }

    createDynamicComponent() {
        const compFactory = this.componentFactory.resolveComponentFactory(this.ndcDynamicComponent)
        const hostViewContainerRef = this.viewContainerRef;
        hostViewContainerRef.clear();
        hostViewContainerRef.createComponent(compFactory)
    }

}
