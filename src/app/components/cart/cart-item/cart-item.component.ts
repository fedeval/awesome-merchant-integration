import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Product;
  @Output() removeItem: EventEmitter<Product> = new EventEmitter();
  @Output() updateSelectedAmount: EventEmitter<Product> = new EventEmitter();

  constructor() {
    this.cartItem = {
      name: '',
      price: 0,
      url: '',
      description: '',
      availableAmount: 0,
      selectedAmount: 0
    };
  }

  ngOnInit(): void {}

  removeFromCart(cartItem: Product): void {
    this.removeItem.emit(cartItem);
  }

  changeSelectedAmount(cartItem: Product): void {
    this.updateSelectedAmount.emit(cartItem)
  }
}
