import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss']
})
export class TemplateFullWidthComponent implements OnInit {
  @Input() public title!: {label: string};
  // decorateur pour pouvoir acceder de l'exterieure
  constructor() {
    // this.title = {label:'Le titre est ici'};
    // initialisé dans le constructor
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`ngOnChanges:`, changes);
  }

  ngOnInit(): void {
  }
}
