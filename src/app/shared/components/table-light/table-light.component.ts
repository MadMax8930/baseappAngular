import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit {
  @Input() public headers!: string[];
  // @Input() public collection!: Order[];
  // le composant est pret pour recupérer les données

  constructor() { }

  ngOnInit(): void {
  }

}
