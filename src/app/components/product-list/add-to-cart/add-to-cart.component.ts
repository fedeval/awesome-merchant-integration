import { Component, Input, OnInit } from '@angular/core';
import { CartListService } from 'src/app/services/cart-list.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  @Input() productItem: Product;
  selectedAmount = 0;
  availableAmounts: number[] = [];

  constructor(private cartService: CartListService) {
    this.productItem = {
      name: '',
      price: 0,
      url: '',
      description: '',
      availableAmount: 0,
      selectedAmount: 0
    };
  }

  ngOnInit(): void {
    this.availableAmounts = [
      ...Array(this.productItem.availableAmount).keys()
    ].map((i) => i + 1);
  }

  ngDoCheck(): void {
    /* Needed to render available amounts correctly in the form within the product details
    page. Since the product-details ngOnInit executes asynchronous operations using Observables,
    it ends execution after the add-to-cart ngOnInit, hence the availableAmounts will
    always be [] if we don't execute a check. */
    if (this.availableAmounts.length !== this.productItem.availableAmount) {
      this.availableAmounts = [
        ...Array(this.productItem.availableAmount).keys()
      ].map((i) => i + 1);
    }
  }

  addToCart(productItem: Product): void {
    this.productItem.selectedAmount = this.selectedAmount;
    this.cartService.addToCart(productItem);
    alert(
      `${this.productItem.name} added to the cart!\nAmount: ${this.selectedAmount}`
    );
  }
}
