import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WalletComponent } from './wallet/wallet.component';
import { HomeComponent } from './home/home.component';
import { ShoppingBagComponent } from './shopping-bag/shopping-bag.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    WalletComponent,
    HomeComponent,
    ShoppingBagComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
