import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeText, customIncrement } from 'src/app/state/counter.actions';
import { getText } from 'src/app/state/counter.selectors';
import { CounterState } from 'src/app/state/counter.state';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number = 0;
  // text: string = '';
  text$!: Observable<string>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.text$=this.store.select(getText);
    // .subscribe((text) => {
    //   console.log('text observable called');
    //   this.text = text;
    // });
  }
  onAdd() {
    // console.log(this.value);
    this.store.dispatch(customIncrement({ value: +this.value }));
  }
  onchangeText() {
    this.store.dispatch(changeText());
  }
}
