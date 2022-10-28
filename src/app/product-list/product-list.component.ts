import { Component } from '@angular/core';

import { products } from '../products';

import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  subtract(product: Product) {
    product.count -= 1;
  }
  add(product: Product) {
    product.count += 1;
  }

  calc_weight_sum() {
    let result = 0;
    for (let index = 0; index < this.products.length; index++) {
      result += this.products[index].count * this.products[index].weight;
    }
    return result;
  }

  measured_weight() {
    return 1000;
  }

  reset_count() {
    for (let index = 0; index < this.products.length; index++) {
      this.products[index].count = 0;
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
