import { Component, Input } from '@angular/core';

type inputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-pirmary-input',
  standalone: true,
  imports: [],
  templateUrl: './pirmary-input.component.html',
  styleUrl: './pirmary-input.component.scss'
})
export class PirmaryInputComponent {

@Input() type: inputTypes = "text";

}
