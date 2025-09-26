import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {FormsModule} from "@angular/forms";
import { MacaroonComponent } from './components/macaroon/macaroon.component';
import {AdvantageComponent} from "./components/advantage/advantage.component";
import { ButtonEffectDirective } from './directives/button-effect.directive';
import { ShortTextPipe } from './pipes/short-text.pipe';
import { FormPhonePipe } from './pipes/form-phone.pipe';

//глобальная локализация проекта
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MacaroonComponent,
    AdvantageComponent,
    ButtonEffectDirective,
    ShortTextPipe,
    FormPhonePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
