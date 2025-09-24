import {Injectable} from '@angular/core';
import {MacaroonType} from "../types/macaroon.type";

@Injectable({
  providedIn: 'root'
})
export class MacaroonService {

  constructor() {
  }

  getMacaroons(): MacaroonType[] {
    return [
      {
        image: 'image1.png',
        title: 'Макарун с малиной',
        quantity: 1,
        price: 1.70,
      },
      {
        image: 'image2.png',
        title: 'Макарун с манго',
        quantity: 1,
        price: 1.70,
      },
      {
        image: 'image3.png',
        title: 'Пирог с ванилью',
        quantity: 1,
        price: 1.70,
      },
      {
        image: 'image4.png',
        title: 'Пирог с фисташками',
        quantity: 1,
        price: 1.70,
      },
    ];
  }
}
