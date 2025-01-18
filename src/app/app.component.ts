import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextInputComponent } from './text-input/text-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { CustomStepperComponent } from './custom-stepper/custom-stepper.component';
import { UserService } from './user.service';
import { GraphqlService } from './graphql/graphql.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextInputComponent, NumberInputComponent, CustomStepperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'primeng-test';

  constructor(
    private userService: UserService,
    private graphqlService: GraphqlService
  ) {
    this.userService.getUsers().subscribe((result: any) => {
      // this.users = result.data.users;
      console.log('OLD', result.data);
    });
    this.addUser();
  }

  loadUsers() {
    this.graphqlService.getUsers().subscribe(({ data }) => {
      // this.users = data.users;
      console.log('LOGG', data.users);
    });
  }

  addUser() {
    this.graphqlService.createUser('New User', 'new@example.com', 'password123').subscribe(() => this.loadUsers());
  }
}
