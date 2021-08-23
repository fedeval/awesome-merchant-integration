import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartListService } from 'src/app/services/cart-list.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];
  totalPrice = 0;

  constructor(private cartService: CartListService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  removeItem(product: Product): void {
    this.cartList = this.cartService.removeFromCart(product);
    this.totalPrice = this.cartService.getTotalPrice();
  }

  editItem(product: Product): void {
    this.cartList = this.cartService.editCart(product);
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
