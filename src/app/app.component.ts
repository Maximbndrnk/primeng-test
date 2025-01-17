import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextInputComponent, NumberInputComponent, CustomStepperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'primeng-test';

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((result: any) => {
      // this.users = result.data.users;
      console.log(result.data);
    });
  }
}
