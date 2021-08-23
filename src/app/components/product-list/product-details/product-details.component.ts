import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id = 0;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product = {
      name: '',
      price: 0,
      url: '',
      description: '',
      availableAmount: 0
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => (this.id = parseInt(data.id, 10)));
    this.productService.getProducts().subscribe((data) => {
      this.product = data.find((p) => p.id === this.id) as unknown as Product;
    });
  }
}
