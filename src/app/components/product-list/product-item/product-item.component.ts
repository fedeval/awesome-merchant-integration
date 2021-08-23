import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem: Product;
  path: string;
  selectedAmount = 0;

  constructor(private router: Router) {
    this.productItem = {
      name: '',
      price: 0,
      url: '',
      description: '',
      availableAmount: 0
    };
    this.path = router.url;
  }

  ngOnInit(): void {}
}
