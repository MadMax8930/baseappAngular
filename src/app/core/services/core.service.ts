import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  // @Input() public version: number = 0;
  // private numVersion$ = new BehaviorSubject<string>(value: 0);

  constructor() { }

  // public incrementVersion(): void {
  //   this.numVersion$.next(value: this.numVersion$.value + 1);
  // }

}
