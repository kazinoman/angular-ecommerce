import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';

import { AdditionRoutingModule } from './addition-routing.module';
import { AdditionHomeComponent } from './addition-home/addition-home.component';
import { AdditionService } from './service/addition.service';

@NgModule({
  declarations: [AdditionHomeComponent],
  imports: [
    CommonModule,
    AdditionRoutingModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    ReactiveFormsModule,
  ],
  providers: [AdditionService],
})
export class AdditionModule {}
