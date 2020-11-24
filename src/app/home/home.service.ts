import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class HomeService{
    multicastData:Subject<any>= new BehaviorSubject(null);

    multiCastData(data){
        this.multicastData.next(data);
    }
    
}