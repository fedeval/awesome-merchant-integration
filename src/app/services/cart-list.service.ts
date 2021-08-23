import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartListService {
  cartList: Product[] = [];

  constructor() {}

  getCart(): Product[] {
    return this.cartList;
  }

  addToCart(product: Product): void {
    this.cartList.push(product);
  }

  removeFromCart(product: Product): Product[] {
    this.cartList = this.cartList.filter((p) => p.id !== product.id);
    return this.cartList;
  }

  editCart(product:Product): Product[] {
    this.cartList = this.cartList.map((p) => p.id == product.id ? product : p);
    return this.cartList
  }

  clearCart(): Product[] {
    this.cartList = [];
    return this.cartList;
  }

  getTotalPrice(): number {
    return this.cartList.reduce((acc, cval) => {
      return acc + cval.price * Number(cval.selectedAmount);
    }, 0);
  }
}
