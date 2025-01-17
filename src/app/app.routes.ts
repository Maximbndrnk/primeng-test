import { Routes } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';
import { NumberInputComponent } from './number-input/number-input.component';

export const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: TextInputComponent },
  { path: 'two', component: NumberInputComponent },
];
