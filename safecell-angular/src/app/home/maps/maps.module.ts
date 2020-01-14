import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsComponent } from './maps.component';
import { MapsRoutingModule } from './maps-routing.module';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    MapsRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1MD4WkuzkMuJigLa24zKSsCV1YrX5GNY'
    })
  ],
  declarations: [
    MapsComponent
  ],
})
export class MapsModule { }
