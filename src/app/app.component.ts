import { Component } from '@angular/core';
import {  Store } from '@ngrx/store';

interface AppStore {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor( private store: Store<AppStore> ){
    /* this.contador = 10; */
  }

  incrementar(){
    /* this.contador ++; */
  }

  decrementar(){
    /* this.contador --; */
  }

}
