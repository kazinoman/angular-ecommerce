import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionHomeComponent } from './addition-home/addition-home.component';

const routes: Routes = [{ path: 'addition', component: AdditionHomeComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdditionRoutingModule {}
