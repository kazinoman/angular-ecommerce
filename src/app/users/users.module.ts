import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzImageModule } from 'ng-zorro-antd/image';

import { UsersRoutingModule } from './users-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzSkeletonModule,
    NzImageModule,
  ],
  exports: [],
  providers: [UserService],
})
export class UsersModule {}
