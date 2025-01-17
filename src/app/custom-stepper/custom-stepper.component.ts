import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButton } from 'primeng/togglebutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Password } from 'primeng/password';

@Component({
  standalone: true,
  selector: 'app-custom-stepper',
  imports: [
    StepperModule,
    ButtonModule,
    InputTextModule,
    ToggleButton,
    CommonModule,
    FormsModule,
    Password
  ],
  templateUrl: './custom-stepper.component.html',
  styleUrl: './custom-stepper.component.scss'
})
export class CustomStepperComponent {
  activeStep: number = 1;

  name: string | undefined = 'null';

  email: string | undefined = 'null';

  password: string | undefined = 'null';

  option1: boolean | undefined = false;

  option2: boolean | undefined = false;

  option3: boolean | undefined = false;

  option4: boolean | undefined = false;

  option5: boolean | undefined = false;

  option6: boolean | undefined = false;

  option7: boolean | undefined = false;

  option8: boolean | undefined = false;

  option9: boolean | undefined = false;

  option10: boolean | undefined = false;
}
