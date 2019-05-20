import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR,ControlValueAccessor} from  '@angular/forms'

import {RadioOption} from '../radio/radio-option.model'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
  	{
  		provide: NG_VALUE_ACCESSOR,
  		useExisting: forwardRef(()=>RadioComponent),
  		multi: true
  	}
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

value: any
onChange: any
	
@Input() options: RadioOption[]
  
  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
 	this.value = value
 	this.onChange(this.value)
  }



    writeValue(obj: any){
    	this.value = obj
    }
    registerOnChange(fn: any){this.onChange = fn}
    registerOnTouched(fn: any){/*somente se o usuário entrou no campo*/}
    setDisabledState?(isDisabled: boolean){}
}


