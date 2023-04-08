import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterReducer } from 'src/app/state/counter.reducer';
import { CounterState } from 'src/app/state/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from 'src/app/state/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter: number = 0;

  // counter: number = 0;
  counter$!: Observable<number>;
  // counter$!: Observable<{ counter: number}>;

  counterSub!: Subscription;
  // constructor(private store: Store<{ counter: { counter: number } }>) {}
  // constructor(private store: Store<{ counter: CounterState }>) {}
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.counterSub = this.store.select('counter').subscribe((data) => {
    // this.counter = data.counter;
    // });
    // this.counter$ = this.store.select('counter');
    this.counter$ = this.store.select(getCounter);
    // .subscribe((counter) => {
    //   console.log('counter observable called');

    // this.counter = counter;
    // });
  }
  // ngOnDestroy(): void {
  // if (this.counterSub) {
  //   this.counterSub.unsubscribe();
  // }
  // }
}
