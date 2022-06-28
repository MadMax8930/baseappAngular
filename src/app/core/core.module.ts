import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { LoginModule } from '../login/login.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    UiModule, IconsModule, TemplatesModule, LoginModule, NavBarComponent, FooterComponent, HeaderComponent
  ]
})
export class CoreModule { }
// modules structurelles
// orchestre l'application
