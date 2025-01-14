import { Component } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-number-input',
  imports: [
    InputNumber,
    FormsModule
  ],
  templateUrl: './number-input.component.html',
  styleUrl: './number-input.component.scss'
})
export class NumberInputComponent {
  value3: any;

}
