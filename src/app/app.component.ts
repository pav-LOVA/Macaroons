import { Component } from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {MacaroonType} from "./types/macaroon.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'macaroons';

  public linkInstagram: string = 'https://instagram.com/';
  public phoneNumber: string = '+375 (29) 368-98-68';

  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ];

  public macaroons: MacaroonType[] = [
    {
      image: 'image1.png',
      name: 'Макарун с малиной',
      quantity: 1,
      price: 1.70,
    },
    {
      image: 'image2.png',
      name: 'Макарун с манго',
      quantity: 1,
      price: 1.70,
    },
    {
      image: 'image3.png',
      name: 'Пирог с ванилью',
      quantity: 1,
      price: 1.70,
    },
    {
      image: 'image4.png',
      name: 'Пирог с фисташками',
      quantity: 1,
      price: 1.70,
    },

  ];

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  };

  public formValues = {
    title: '',
    name: '',
    phone: '',
  }

  public addToCart(macaroon: MacaroonType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.title = macaroon.name.toUpperCase();
  }

  public createOrder(): void {
    if (!this.formValues.title) {
      alert('Выберите макарун по душе');
      return;
    } else
    if (!this.formValues.name) {
      alert('Назовите свое имя');
      return;
    } else
    if (!this.formValues.phone) {
      alert('Укажите номер, по которому мы можем с вами связаться');
      return;
    } else {
      alert('Спасибо за заказ (:');
      this.formValues = {
        title: '',
        phone: '',
        name: '',
      }
    }
  }

  public showPresent: boolean = true;

}
