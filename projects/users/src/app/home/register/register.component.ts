import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { repoService, User } from '../services/register.service';

@Component({
  selector: 'sdi-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  newUser: FormGroup;
  @Output() onAdd: EventEmitter<User>;
  constructor(public form: FormBuilder, public srv: repoService) {
    this.onAdd = new EventEmitter();
    this.newUser = form.group({
      name: '',
      email: '',
      password: '',
    });
  }

  handleSubmit() {
    const sendNewUser: User = {
      name: this.newUser.value.name,
      email: this.newUser.value.email,
      password: this.newUser.value.password,
    };
    console.log(sendNewUser);
    this.srv.registerUser(sendNewUser).subscribe((response: any) => {
      console.log(response);
      this.onAdd.emit(response.result);
      console.log('user registered');
    });
    this.newUser.reset();
  }
}
