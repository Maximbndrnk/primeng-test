import { Component } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { Select, SelectModule } from 'primeng/select';
import { NgIf } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { Password } from 'primeng/password';
@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [
    Button,
    IconFieldModule,
    InputIconModule,
    InputNumberModule,
    FormsModule,
    InputText,
    SelectModule, ButtonModule, NgIf, InputGroup, InputGroupAddon, Password],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  value: string = '';
  value3=0;
  selectedCountry=null;
  countries = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' }
  ];
  number = 0;

  toggleDarkMode() {
    const element = document.querySelector('html');
    if (element){
      element.classList.toggle('my-app-dark');
    }
  }

  click() {
    console.log('log');
  }
}
