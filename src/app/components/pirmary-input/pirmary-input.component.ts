import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_ASYNC_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type inputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-pirmary-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers:[{ 
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PirmaryInputComponent),
    multi: true
    }
  ],
  templateUrl: './pirmary-input.component.html',
  styleUrl: './pirmary-input.component.scss'
})
export class PirmaryInputComponent implements ControlValueAccessor{
@Input() type: inputTypes = "text";
@Input() placeholder: string = "";
@Input() label: string = "";
@Input() inputName: string = "";


value: string = ''
 onChange: any = () => {}
 onTouch: any = () => {}

 onInput(event: Event) {
  const value = (event.target as HTMLInputElement). value
    this.onChange(value)
  }

  writeValue(value: any): void {
    this.value = this.value
  } 

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  setDisabledState(isDisabled: boolean): void {
  }
}
