import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-list/product-details/product-details.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddToCartComponent } from './components/product-list/add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    NavbarComponent,
    CartComponent,
    ProductDetailsComponent,
    ConfirmationComponent,
    AddToCartComponent,
    CheckoutComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
