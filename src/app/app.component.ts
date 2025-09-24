import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {MacaroonType} from "./types/macaroon.type";
import {MacaroonService} from "./services/macaroon.service";
import {AdvantageService} from "./services/advantage.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'macaroons';

  public linkInstagram: string = 'https://instagram.com/';
  public phoneNumber: string = '375293689868';

  public macaroons: MacaroonType[] = [];
  public advantages: AdvantageType[] = [];

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  };

  public formValues = {
    title: '',
    name: '',
    phone: '',
  }

  constructor(private macaroonService: MacaroonService, private advantageService: AdvantageService, public cartService: CartService) {
    this.macaroons = this.macaroonService.getMacaroons();
    this.advantages = this.advantageService.getAdvantages();
  }

  public addToCart({ title, price }: { title: string; price: number }, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.title = title.toUpperCase();
    this.cartService.count++;
    this.cartService.sum = this.cartService.sum + price;
    alert(title + ' добавлен в корзину!');
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
