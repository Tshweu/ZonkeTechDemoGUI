import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  {
    path:'user',
    component: UserViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
