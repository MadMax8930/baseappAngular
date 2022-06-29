import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { TableLightComponent } from './components/table-light/table-light.component';
import { BtnComponent } from './components/btn/btn.component';



@NgModule({
  declarations: [
   
  
    TableLightComponent,
           BtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    TableLightComponent,
    BtnComponent
  ]
})
export class SharedModule { }

// module structurelles
// partager differents modules, directives, pipes dans mon appli
