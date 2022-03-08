import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// routing module
import { RoutingModule } from './routing.module';

// module
import { SharedModule } from '../shared/shared.module';

// pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
