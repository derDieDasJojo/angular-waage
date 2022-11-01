import { Component } from '@angular/core';
import { products } from '../products';
import { Product } from '../products';
import { boxes } from '../boxes';
import { Box } from '../boxes';
import { results } from '../results';
import { Result } from '../results';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
  boxes = boxes;
  results: Result[] = [];
  clickedProudctId: number = 0;

  measured_weight: Box = {
    id: 0,
    name: 'Gewicht',
    description: 'gemessenes Gewicht',
    count: 1,
    weight: 0,
  };

  share() {
    window.alert('The box has been shared!');
  }

  subtract(box: Box) {
    box.count -= 1;
  }
  add(box: Box) {
    box.count += 1;
  }

  calc_weight_sum() {
    let result = 0;
    for (let index = 0; index < this.boxes.length; index++) {
      result += this.boxes[index].count * this.boxes[index].weight;
    }
    return result;
  }

  get_measured_weight() {
    return 1000;
  }

  reset_count() {
    for (let index = 0; index < this.boxes.length; index++) {
      this.boxes[index].count = 0;
    }
    this.clickedProudctId = 0;
  }

  setClicked(id: number) {
    this.clickedProudctId = id;
  }

  isClicked(id: number): boolean {
    return id === this.clickedProudctId;
  }

  saveSelection() {
    let result: Result = {
      name: this.products[this.clickedProudctId].name,
      description: '',
      weight: this.get_measured_weight() - this.calc_weight_sum(),
    };
    this.results.push(result);
    this.reset_count();
  }

  downloadFile() {
    // build data
    //let data = this.boxes;
    let data = this.results;

    /*let w = {
      id: 0,
      name: 'Gewicht',
      description: 'gemessenes Gewicht',
      count: 1,
      weight: this.get_measured_weight(),
    };
    data.push(w);

    let r = {
      id: 0,
      name: 'Ergebnis',
      description: 'Ergebnis',
      count: 1,
      weight: this.get_measured_weight() - this.calc_weight_sum(),
    };
    data.push(r);*/

    // Build downloader
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
    saveAs(blob, 'Gemuesegewichte.csv');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
