import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
// export class HeaderComponent implements OnInit, OnDestroy {
  export class HeaderComponent {

  public version!: number;
  private subscription!: Subscription;
  constructor(private coreService: CoreService) { }

  // ngOnInit(): void {
  //   this.coreService.numVersion$.subscribe(observer:{
  //     next: (dataVersion: number) => this.version = dataVersion
  //   })
  // }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

}
