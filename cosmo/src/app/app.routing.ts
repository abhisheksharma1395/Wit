import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WalletComponent } from './wallet/wallet.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'wallet', component: WalletComponent}
];

export const routing = RouterModule.forRoot(appRoutes);