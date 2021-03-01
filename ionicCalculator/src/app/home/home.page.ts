import { Component } from '@angular/core';
import { isNumber } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  value = '0';
  oldVal = null;
  newInput = true;
  lastOperator = null;
  dot = false;
  c = false;
  buttons = [ 
    [7,    8,    9,'x'],
    [4,    5,    6, '-'],
    [1,    2,    3, '+'],
  ];

  onButtonPress(symbol){
    console.log(symbol);
    if(isNumber(symbol)){
      this.c = true;
      if(this.newInput){
        if(symbol === 0 && this.value == '0'){

        }else{
          this.value ='' + symbol;
        }
      }
      else{
        if(symbol === 0 && this.value == '0'){

        }else{
          this.value = this.value + '' + symbol;
        } 
      }
      this.newInput = false;
    }
    else if (symbol === '.'){
      if(!this.dot){
        this.value = this.value + '' + symbol;
      }
      this.dot = true;
      this.newInput = false;
    }
    else if(symbol === 'AC'){
      this.value = '0';
      this.oldVal = null;
      this.newInput = true; 
      this.dot = false;
      
    }
    else if(symbol === 'C'){
      this.c = false;
      this.value = '0';
      this.newInput = true;
    }
    else if(symbol === '%'){
      this.value = '' + (parseFloat(this.value) / 100);
      this.oldVal = this.value;
    }
    else if(symbol === '+/-'){
      this.value = '' + (parseFloat(this.value) * -1);
      this.oldVal = this.value;
    }
    else if(symbol === '+'){
      if(this.oldVal !== null && this.lastOperator !== null && this.newInput === false){
        this.calculate();
      }
      this.lastOperator = '+';
      this.newInput = true;
      this.oldVal = this.value;
      this.dot = false;
    }
    else if(symbol === '-'){
      if(this.oldVal !== null && this.lastOperator !== null && this.newInput === false){
        this.calculate();
      }
      this.lastOperator = '-';
      this.newInput = true;
      this.oldVal = this.value;
      this.dot = false;
    }
    else if(symbol === 'x'){
      if(this.oldVal !== null && this.lastOperator !== null && this.newInput === false){
        this.calculate();
      }
      this.lastOperator = 'x';
      this.newInput = true;
      this.oldVal = this.value;
      this.dot = false;
    }
    else if(symbol === ':'){
      if(this.oldVal !== null && this.lastOperator !== null && this.newInput === false){
        this.calculate();
      }
      this.lastOperator = ':';
      this.newInput = true;
      this.oldVal = this.value;
      this.dot = false;
    }
    else if(symbol === '='){
      this.calculate();
    }
  }

  calculate(){
    console.log(this.oldVal);
    console.log(this.lastOperator);
    console.log(this.value);
    console.log(this.newInput);
    
      if(this.lastOperator === 'x'){
        this.value = '' + (parseFloat(this.oldVal) * parseFloat(this.value));
      }
      else if(this.lastOperator === '-'){
        this.value = '' + (parseFloat(this.oldVal) - parseFloat(this.value));
      }
      else if(this.lastOperator === ':'){
        this.value = '' + (parseFloat(this.oldVal) / parseFloat(this.value));
      }
      else if(this.lastOperator === '+'){
        this.value = '' + (parseFloat(this.oldVal) + parseFloat(this.value));
      }
      this.oldVal = this.value;
      this.lastOperator = null;
      this.newInput = true;
      this.dot = false;
  }
  
}

