import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
display = "0";
values = [
 {valueOne: 0,
  valueTwo: 0
}
]

times(a:number, b:number){
return  a * b;

}

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(
    ){}
    operMulti(valueOne:number, valueTwo:number, result:number){

      if (valueOne >= 0 && valueTwo >= 0 ){
      result =  this.times(valueOne,valueTwo)
      }
      console.log(result)
    }
}
