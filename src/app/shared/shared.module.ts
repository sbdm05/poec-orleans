import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableLightComponent } from './components/table-light/table-light.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [
    BtnComponent,
    TableLightComponent,
    TotalPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    IconsModule,
    BtnComponent,
    TableLightComponent,
    TotalPipe
  ]
})
export class SharedModule { }
