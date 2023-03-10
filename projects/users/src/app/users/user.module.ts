import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './list/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UserListComponent, UsersComponent],
  imports: [CommonModule, ReactiveFormsModule, UserRoutingModule],
})
export class UsersModule {}
