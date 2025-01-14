import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    Button,
    InputNumberModule,
    FormsModule,
    InputText
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  value: string = '';
  value3: any;
  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element){
      element.classList.toggle('my-app-dark');
    }
  }
}
