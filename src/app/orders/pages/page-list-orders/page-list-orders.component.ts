import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public parentCollection!: Order[];
  public parentHeaders: string[];
  public monTitre: {label: string};

  constructor(private ordersService: OrdersService) {
    this.monTitre = {label: "Liste des commandes"};
    this.parentHeaders = ["TjmHt", "NbJours", "TVA", "Type Presta", "Client", "State"];
   }

  ngOnInit(): void {
    this.ordersService.collection$.subscribe(
      (data: Order[]) => {
        this.parentCollection = [...data]
        console.log(this.parentCollection);
      }
    )
  }

  changeTitle() {
    // this.monTitre.label = 'Un autre titre';

    // En Js il y a aucun changement a la modif du code de cet objet
    // ce qui est comparé c'est l'emplacement memoire de l'objet
    // car pas de respect du principe d'immuabilité

    this.monTitre = {label: 'Un autre titre'};
  }

}
