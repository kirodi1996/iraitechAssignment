import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.scss']
})
export class Question3Component implements OnInit {

  constructor() { }

  phoneNumberData=[{
    phoneNumber:''
  }]

  ngOnInit(): void {
  }
  
  addPhoneuNumberField(){
    this.phoneNumberData.push({
      phoneNumber:''
    })
  }
  deletePhoneNumber(index:number){
    this.phoneNumberData.splice(index,1)
  }
  submitPhoneNumber(){
    console.log(this.phoneNumberData)
  }

}
