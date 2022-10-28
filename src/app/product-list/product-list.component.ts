import { Component } from '@angular/core';

import { products } from '../products';

import { Product } from '../products';

import { saveAs } from 'file-saver';

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

  downloadFile(data: any) {
    const replacer = (_key: any, value: null) => (value === null ? '' : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map((row: { [x: string]: any }) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');

    var blob = new Blob([csvArray], { type: 'text/csv' });
    saveAs(blob, 'myFile.csv');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
