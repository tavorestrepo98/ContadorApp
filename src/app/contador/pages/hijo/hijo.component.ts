import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { multiplicar, dividir } from './../../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador;
    })
  }

  ngOnInit(): void {
  }

  multiplicar(){
    this.store.dispatch(multiplicar({numero: 2}));
  }

  dividir(){
    this.store.dispatch(dividir({numero: 2}));
  }

}
