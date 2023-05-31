import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { UserViewComponent } from './user-view/user-view.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    UserViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
