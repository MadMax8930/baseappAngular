import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<t>Text<t>`
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'baseapp';
  // composant c'est un classe
  // avec operateur on decore le compo


  constructor(private router: Router) {
    console.log(this.router.config)
  }
}

