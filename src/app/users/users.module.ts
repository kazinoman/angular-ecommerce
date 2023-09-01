import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [CommonModule, UsersRoutingModule],
  exports: [],
})
export class UsersModule {}
