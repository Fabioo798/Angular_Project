import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { repoService, User } from '../services/register.service';

@Component({
  selector: 'sdi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginUser: FormGroup;
  @Output() onAdd: EventEmitter<Partial<User>>;
  token: string;
  constructor(public form: FormBuilder, public srv: repoService) {
    this.onAdd = new EventEmitter();
    this.loginUser = form.group({
      name: '',
      email: '',
      password: '',
    });
    this.token = '';
  }

  handleSubmit() {
    const sendLogUser: Partial<User> = {
      email: this.loginUser.value.email,
      password: this.loginUser.value.password,
    };
    console.log(sendLogUser);
    this.srv.loginUser(sendLogUser).subscribe((response: any) => {
      console.log(response);
      this.token = response.results.token; // Store the token
      console.log('Token:', this.token);
      localStorage.setItem('token', this.token); // Save the token to the local storage
      this.loadUsers();
    });
    console.log('user logged');
    this.loginUser.reset();
  }

  loadUsers() {
    const headers = { Authorization: `Bearer ${this.token}` }; // Add the token to headers
    this.srv.loadUsers(headers).subscribe((users: User[]) => {
      console.log('Users:', users);
      // Do something with the users
    });
  }
}
