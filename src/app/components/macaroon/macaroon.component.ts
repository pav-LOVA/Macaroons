import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MacaroonType} from "../../types/macaroon.type";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-macaroon',
  templateUrl: './macaroon.component.html',
  styleUrls: ['./macaroon.component.scss'],
})
export class MacaroonComponent implements OnInit {

  @Input() macaroon: MacaroonType;
  @Output() addToCartEvent: EventEmitter<{title:string, price: number}> = new EventEmitter<{title:string, price: number}>();

  constructor() {
    this.macaroon = {
      image: '',
      title: '',
      quantity: 0,
      price: 0,
    }
  }

  addMacaroonToCart(title: string, price:number): void {
    this.addToCartEvent.emit({ title, price });
  }

  ngOnInit(): void {
  }


  protected readonly CurrencyPipe = CurrencyPipe;

}
