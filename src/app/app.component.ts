import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextInputComponent, NumberInputComponent, CustomStepperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-test';
}
