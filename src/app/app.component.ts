import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-test';
}
